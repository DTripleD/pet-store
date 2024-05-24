import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.get(`/products/${id}/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
