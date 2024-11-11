import { createSlice } from "@reduxjs/toolkit";
import {
  addToFeatured,
  deleteFromFeatured,
  getFeatured,
} from "./featuredOperations";

const initialState = { featured_items: [] };

const handlePending = (state) => {
  state.error = "";
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const featuredSlice = createSlice({
  name: "featured",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getFeatured.fulfilled, (state, { payload }) => {
        state.featured_items = payload.featured_items;
      })
      .addCase(addToFeatured.fulfilled, (state, { payload }) => {
        state.featured_items = payload.featured_items;
      })
      .addCase(deleteFromFeatured.fulfilled, (state, { payload }) => {
        state.featured_items = payload.featured_items;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const featuredReducer = featuredSlice.reducer;
