import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

const fetchCities = createAsyncThunk(
  "cities/fetchAll",
  async (area_ref, thunkAPI) => {
    try {
      const { data } = await instance.get('/settlements/', {
        params: {
          area_ref,
        }
      });
      console.log('Cities:', data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export default fetchCities;