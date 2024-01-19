import { createSlice } from "@reduxjs/toolkit";
import {logIn, logOut, refreshUser} from "./operations"

const initialState = {
    admin: {
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(logIn.fulfilled, (state, action) => {
                state.admin = action.payload.admin;
                state.token = action.payload.token;
                state.isLoggedIn = true
            })
            .addCase(logIn.rejected, (state) => state)
            .addCase(logOut.fulfilled, (state) => {
                state.admin = {
                    email: null
                };
                state.token = null,
                state.isLoggedIn = false
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
              })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.admin = action.payload.userResult;
                state.isLoggedIn = true;
                state.isRefreshing = false;
              })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
              }),
})

export const authReducer = authSlice.reducer;