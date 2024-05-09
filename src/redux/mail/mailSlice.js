import { createSlice } from "@reduxjs/toolkit";
import {sendMail} from "./operation";

const mailInitialState = {
    mail: [],
    isSending: false,
    error: null,
};
  
  // add mail handlers
  const handleaddNewMailPending = (state) => {
    state.isAdding = true;
  };
  
  const handleaddNewMailSuccess = (state, { payload }) => {
    state.error = null;
    state.mail.unshift(payload);
    state.isSending = true;
    console.log(state);
  };
  
  const handleaddNewMailRejected = (state, action) => {
    state.error = action.payload;
    state.isSending = false;
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
export const mailReducer = mailSlice.reducer;