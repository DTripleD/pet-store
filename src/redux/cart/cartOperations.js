import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "src/shared/api/instance";

const setCartHeader = (cartToken) => {
  instance.defaults.headers.common["Cart"] = "Token " + cartToken;
};

const clearCartHeader = () => {
  instance.defaults.headers.common["Cart"] = "";
};

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (token, thunkAPI) => {
    try {
      setCartHeader(token);
      const res = await instance.get("/cart/");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ id, token }, thunkAPI) => {
    try {
      setCartHeader(token);
      const res = await instance.post(`cart/add/${id}/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
