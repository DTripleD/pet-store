import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./productOperations";

const initialState = {
  productInfo: {
    name: "",
    description: "",
    images: [],
    price: "",
    discount_price: "",
  },
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
        state.productInfo = payload;
      })

      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const productReducer = productSlice.reducer;
