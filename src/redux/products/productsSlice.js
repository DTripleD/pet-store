import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getDiscounts,
  getNew,
  getProducts,
} from "./productsOperations";

const initialState = {
  count: 2,
  next: null,
  previous: null,
  results: [],
  categories: {},
  isLoading: true,
  priceRange: [0, 0],
};

const handlePending = (state) => {
  state.error = "";
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.results = payload.results;
        state.categories = payload.categories;
        state.isLoading = false;
        state.priceRange = [1, 10000];
      })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDiscounts.fulfilled, (state, { payload }) => {
        state.results = payload.results;
        state.categories = payload.categories;
        state.isLoading = false;
      })
      .addCase(getDiscounts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNew.fulfilled, (state, { payload }) => {
        state.results = payload.results;
        state.categories = payload.categories;
        state.isLoading = false;
      })
      .addCase(getNew.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.results = payload.results;
        state.categories = payload.categories;
        state.isLoading = false;
        state.priceRange = [1, 10000];
      })
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const productsReducer = productsSlice.reducer;
