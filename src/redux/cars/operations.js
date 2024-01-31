import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://carsite-backend.onrender.com';
axios.defaults.baseURL = 'http://localhost:8000';

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",

  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/cars");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewCar = createAsyncThunk(
  "cars/addNewCar",
  async (newCar, thunkAPI) => {
    try {
      const res = await axios.post("/api/cars", newCar, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCar = createAsyncThunk(
  "cars/deletCar",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`/api/cars/${payload}`);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);