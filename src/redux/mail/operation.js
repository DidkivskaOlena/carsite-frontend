import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://carsite-backend.onrender.com';
axios.defaults.baseURL = 'http://localhost:8000';

export const sendMail = createAsyncThunk(
  "mail/sendMail",
  async (newMail, thunkAPI) => {
    try {
      const res = await axios.post("/api/mail", newMail, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);