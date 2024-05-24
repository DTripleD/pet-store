import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsOperations";

const initialState = {
  product: { name: "", description: "" },
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
      .addCase(getProduct.fulfilled, (state, { payload }) => {})

      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const productsReducer = productsSlice.reducer;
