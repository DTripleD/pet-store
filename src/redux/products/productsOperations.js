import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

// export const setAuthHeader = (accessToken) => {
//   instance.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
// };

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ productsId, animalId, value = [] }, thunkAPI) => {
    try {
      const res = await instance.get(
        `http://127.0.0.1:8000/api/v1/products/?product_category=${productsId}&animal_category=${animalId}${
          value.length > 0 ? `&min_price=${value[0]}&max_price=${value[1]}` : ""
        }`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
