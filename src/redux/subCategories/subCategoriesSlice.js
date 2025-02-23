import { createSlice } from "@reduxjs/toolkit";
import { getSubCategories } from "./subCategoriesOperations";

const initialState = {
  isLoading: true,
  error: "",
  subCategories: [],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const subCategoriesSlice = createSlice({
  name: "subCategories",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getSubCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.subCategories = payload;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const subCategoriesReducer = subCategoriesSlice.reducer;
