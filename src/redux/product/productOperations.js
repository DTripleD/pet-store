import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, thunkAPI) => {
    try {
      const res = await instance.get(`/products/${id}/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
