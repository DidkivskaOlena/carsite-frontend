import { createSlice } from "@reduxjs/toolkit";
import {fetchCars, addNewCar, deleteCar, fetchCarById} from "./operations"

const carsInitialState = {
    cars: [],
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  
  // add car handlers
  const handleaddNewCarPending = (state) => {
    state.isAdding = true;
  };
  
  const handleaddNewCarSuccess = (state, { payload }) => {
    state.error = null;
    state.cars.unshift(payload);
  };
  
  const handleaddNewCarRejected = (state, action) => {
    state.error = action.payload;
  };
  
  // delete pet handlers
  const handledeleteCarPending = (state) => {
    state.isLoading = true;
  };
  
  const handledeleteCarSuccess = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.cars = [...state.cars].filter((car) => car._id !== payload);
  };
  
  const handledeleteCarRejected = (state, action) => {
    state.error = action.payload;
  };

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })

      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.rejected, handleRejected)
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      //addNewcar
      .addCase(addNewCar.pending, handleaddNewCarPending)
      .addCase(addNewCar.fulfilled, handleaddNewCarSuccess)
      .addCase(addNewCar.rejected, handleaddNewCarRejected)

      //deletecar
      .addCase(deleteCar.pending, handledeleteCarPending)
      .addCase(deleteCar.fulfilled, handledeleteCarSuccess)
      .addCase(deleteCar.rejected, handledeleteCarRejected),
});

// Експортуємо генератори екшенів та редюсер
export const carsReducer = carsSlice.reducer;