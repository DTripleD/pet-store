import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

// export const setAuthHeader = (accessToken) => {
//   instance.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
// };

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (
    { productsId, animalId, value, subcategory, isNew, hasDiscount },
    thunkAPI
  ) => {
    try {
      const res = await instance.get("/products/", {
        params: {
          product_category: productsId,
          animal_category: animalId,
          subcategory: subcategory,
          min_price: value[0],
          max_price: value[1],
          is_new: isNew,
          has_discount: hasDiscount,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getDiscounts = createAsyncThunk(
  "products/getDiscounts",
  async (_, thunkAPI) => {
    try {
      const res = await instance.get("/products/?has_discount=true");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getNew = createAsyncThunk(
  "products/getNew",
  async (_, thunkAPI) => {
    try {
      const res = await instance.get("/products/?is_new=true");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async ({ searchValue }, thunkAPI) => {
    try {
      const res = await instance.get(`/products?search=${searchValue || ""}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
