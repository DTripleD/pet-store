import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

const fetchRegions = createAsyncThunk(
  "regions/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/areas/');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export default fetchRegions;