import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "src/shared/api/instance";

const setFeaturedHeader = (featuredToken) => {
  instance.defaults.headers.common["Featured"] = "Token " + featuredToken;
};

const clearFeaturedHeader = () => {
  instance.defaults.headers.common["Featured"] = "";
};

export const createFeatured = async () => {
  try {
    const res = await instance.post("/featured/create/");

    const date = new Date();
    // 14 это количество дней
    date.setTime(date.getTime() + 14 * 24 * 60 * 60 * 1000);

    document.cookie = [
      `featuredTokenPetStore=${res.data.hash_code}`,
      `expires=${date.toUTCString()}`,
      "path=/",
    ].join("; ");
  } catch (error) {
    console.log(error);
  }
};

export const getFeatured = createAsyncThunk(
  "featured/getFeatured",
  async (token, thunkAPI) => {
    try {
      setFeaturedHeader(token);
      const res = await instance.get("/featured/");
      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        document.cookie =
          "cartTokenPetStore=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        createFeatured();
      }

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToFeatured = createAsyncThunk(
  "featured/addToFeatured",
  async ({ id, token }, thunkAPI) => {
    try {
      setFeaturedHeader(token);
      const res = await instance.post(`featured/add/${id}/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteFromFeatured = createAsyncThunk(
  "featured/deleteFromFeatured",
  async ({ id, token }, thunkAPI) => {
    try {
      setFeaturedHeader(token);
      const res = await instance.delete(`featured/delete/${id}/`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
