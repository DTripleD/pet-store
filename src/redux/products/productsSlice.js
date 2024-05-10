import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsOperations";

const initialState = {
  count: 2,
  next: null,
  previous: null,
  results: [],
  categories: {},
};

const handlePending = (state) => {
  state.error = "";
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.results = payload.results;
        state.categories = payload.categories;
      })

      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const productsReducer = productsSlice.reducer;
