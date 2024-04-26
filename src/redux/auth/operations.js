import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

// export const setAuthHeader = (accessToken) => {
//   instance.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
// };

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await instance.post("/auth/token/login", {
        email,
        password,
      });
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
