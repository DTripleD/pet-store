import { createSlice } from "@reduxjs/toolkit";
import { addToCart, decreaseFromCart, getCart } from "./cartOperations";

const initialState = {
  cartItems: [],
  isLoading: true,
};

const handlePending = (state) => {
  state.error = "";
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.cartItems = payload.cart_items;
        state.isLoading = false;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        state.cartItems = payload.cart_items;
        state.isLoading = false;
      })
      .addCase(decreaseFromCart.fulfilled, (state, { payload }) => {
        state.cartItems = payload.cart_items;
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("cart/addToCart/pending"),
        handlePending
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const cartReducer = cartSlice.reducer;
