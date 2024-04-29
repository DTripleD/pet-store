import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { getUserInfo, signIn, signUp } from "./operations";

const initialState = {
  authToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  user: { firstName: null, lastName: null, email: null, phoneNumber: null },
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
      .addCase(signUp.fulfilled, (state) => {
        state.isRefreshing = false;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.user.firstName = payload.first_name;
        state.user.lastName = payload.last_name;
        state.user.email = payload.email;
        state.user.phoneNumber = payload.phone_number;
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
