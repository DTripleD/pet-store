import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getCart } from "./cartOperations";

const initialState = {
  cartItems: [],
};

const handlePending = (state) => {
  state.error = "";
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.cartItems = payload.cart_items;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        state.cartItems = payload.cart_items;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const cartReducer = cartSlice.reducer;
