import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./productOperations";

const initialState = {
  productInfo: { name: "", description: "", images: [] },
};

const handlePending = (state) => {
  state.error = "";
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const productSlice = createSlice({
  name: "product",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        console.log(payload);
      })

      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const productReducer = productSlice.reducer;
