import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://carsite-backend.onrender.com/api";
const setAuthHeader = (token) => {
  if (token) {
    axios.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = ``;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

const notify = (msg) =>
  toast.info(msg, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

/*
 * POST @ /auth/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      notify("Incorrect email or password! Try again!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /auth/logout
 * headers: Authorization: Bearer token
 */

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    if (error.response.status === 500) {
      notify("Oops! Server error! Please try later!");
    }
    notify("Something went wrong! Please reload the page!");
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /admin/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth?.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      axios.interceptors.request.use(
        (config) => {
          config.headers["Authorization"] = `Bearer ${
            thunkAPI.getState().auth?.token
          }`;
          return config;
        },
        () => {
          return thunkAPI.rejectWithValue("Unable to fetch user");
        }
      );

      const res = await axios.get("auth/current");
      return res.data;
    } catch (error) {
      clearAuthHeader();
      if (error.response.status === 401) {
        notify("something went wrong, user unauthorized. Please, try again");
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      notify("something went wrong, please, try again");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);