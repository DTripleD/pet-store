import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "src/shared/api/instance";

const setFeaturedHeader = (featuredToken) => {
  instance.defaults.headers.common["Featured"] = "Token " + featuredToken;
};

const clearFeaturedHeader = () => {
  instance.defaults.headers.common["Featured"] = "";
};

export const getFeatured = createAsyncThunk(
  "featured/getFeatured",
  async (token, thunkAPI) => {
    try {
      setFeaturedHeader(token);
      const res = await instance.get("/featured/");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToFeatured = createAsyncThunk(
  "featured/addToFeatured",
  async ({ id, token }, thunkAPI) => {
    console.log(token);
    try {
      setFeaturedHeader(token);
      const res = await instance.post(`featured/add/${id}/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
