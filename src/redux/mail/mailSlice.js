import { createSlice } from "@reduxjs/toolkit";
import {sendMail} from "./operations"

const mailInitialState = {
    mail: [],
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
  const handleaddNewMailPending = (state) => {
    state.isAdding = true;
  };
  
  const handleaddNewMailSuccess = (state, { payload }) => {
    state.error = null;
    state.mail.unshift(payload);
  };
  
  const handleaddNewMailRejected = (state, action) => {
    state.error = action.payload;
  };

const mailSlice = createSlice({
  name: "mail",
  initialState: mailInitialState,
  
  extraReducers: (builder) =>
    builder
      //addNewcar
      .addCase(sendMail.pending, handleaddNewMailPending)
      .addCase(sendMail.fulfilled, handleaddNewMailSuccess)
      .addCase(sendMail.rejected, handleaddNewMailRejected)
});

// Експортуємо генератори екшенів та редюсер
export const carsReducer = mailSlice.reducer;