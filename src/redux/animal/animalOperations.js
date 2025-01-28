import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

export const getAnimals = createAsyncThunk(
  "animal/getAnimals",
  async (_, thunkAPI) => {
    try {
      const res = await instance.get("/animalcategories");

      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAnimalCategory = createAsyncThunk(
  "animal/getAnimalCategory",
  async (category, thunkAPI) => {
    try {
      const res = await instance.get(`/animalcategories/${category}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
