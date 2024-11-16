import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "src/shared/api/instance";

const setCartHeader = (cartToken) => {
  instance.defaults.headers.common["Cart"] = "Token " + cartToken;
};

const clearCartHeader = () => {
  instance.defaults.headers.common["Cart"] = "";
};

export const createCart = async () => {
  try {
    const res = await instance.post("/cart/create/");
    // return res.data;

    const date = new Date();
    // 14 это количество дней
    date.setTime(date.getTime() + 14 * 24 * 60 * 60 * 1000);

    document.cookie = [
      `cartTokenPetStore=${res.data.hash_code}`,
      `expires=${date.toUTCString()}`,
      "path=/",
    ].join("; ");
  } catch (error) {
    console.log(error);
  }
};

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (token, thunkAPI) => {
    try {
      setCartHeader(token);
      const res = await instance.get("/cart/");

      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        document.cookie =
          "cartTokenPetStore=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        createCart();
      }

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

export const decreaseFromCart = createAsyncThunk(
  "cart/decreaseFromCart",
  async ({ id, token }, thunkAPI) => {
    try {
      setCartHeader(token);
      const res = await instance.post(`cart/decrease/${id}/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ id, token }, thunkAPI) => {
    try {
      setCartHeader(token);
      const res = await instance.post(`cart/decrease/${id}/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
