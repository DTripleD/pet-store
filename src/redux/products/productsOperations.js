import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

// export const setAuthHeader = (accessToken) => {
//   instance.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
// };

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (
    {
      productsId,
      animalId,
      value = [],
      subcategory,
      isNew = null,
      hasDiscount = null,
    },
    thunkAPI
  ) => {
    try {
      const res = await instance.get(
        `/products/?product_category=${productsId}&animal_category=${animalId}${
          subcategory ? `&subcategory=${subcategory}` : ""
        }${
          value.length > 0 && value[0] !== 0 && value[1] !== 0
            ? `&min_price=${value[0]}&max_price=${value[1]}`
            : ""
        }${isNew ? `&is_new=true` : ""}${
          hasDiscount ? "has_discount=true" : ""
        }`
      );
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
