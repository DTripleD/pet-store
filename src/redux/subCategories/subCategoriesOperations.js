import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

export const getSubCategories = createAsyncThunk(
  "subCategories/getSubCategories",
  async (id, thunkAPI) => {
    try {
      const res = await instance.get(`/subcategories/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
