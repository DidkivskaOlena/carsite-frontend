import { createSlice } from '@reduxjs/toolkit';
import {logIn, logOut } from './operations';

const initialState = {
  user: {email: null },
  token: null,
  isLoggedIn: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
  },
});

export const authReducer = authSlice.reducer;
