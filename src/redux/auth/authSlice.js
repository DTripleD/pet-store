import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { getUserInfo, logOut, signIn, signUp } from "./operations";

const initialState = {
  authToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  user: { first_name: "", last_name: "", email: "", phone_number: "" },
  isActivationSent: false,
};

const handlePending = (state) => {
  state.error = "";
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.authToken = payload.auth_token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = action.payload.message;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.first_name = payload.first_name;
        state.isActivationSent = true;
        state.isRefreshing = false;

        setTimeout(() => (state.isActivationSent = false), 5000);
      })
      .addCase(logOut.fulfilled, (state) => {
        state.authToken = null;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.user.first_name = payload.first_name;
        state.user.last_name = payload.last_name;
        state.user.email = payload.email;
        state.user.phone_number = payload.phone_number;

        state.isLoggedIn = true;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

const authReducer = authSlice.reducer;

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["authToken"],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
