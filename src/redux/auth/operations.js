import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

// export const setAuthHeader = (accessToken) => {
//   instance.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
// };

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post("/auth/token/login", credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post("/auth/users", credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
