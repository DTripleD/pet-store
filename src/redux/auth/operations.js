import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

const setAuthHeader = (accessToken) => {
  instance.defaults.headers.common["Authorization"] = "Token " + accessToken;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common["Authorization"] = "";
};

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials, thunkAPI) => {
    try {
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
      clearAuthHeader();
      const res = await instance.post("/auth/token/login/", credentials);
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
      const res = await instance.post("/auth/users/", credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (token, thunkAPI) => {
    try {
      setAuthHeader(token);
      const res = await instance.post("/auth/token/logout/");

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "auth/getUserInfo",
  async (token, thunkAPI) => {
    try {
      if (token === null) {
        return;
      }
      setAuthHeader(token);
      const res = await instance.get("/auth/users/me/", token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "auth/updateUserInfo",
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.put("/auth/users/me/", credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
