import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "./cartOperations";

const initialState = {};

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
        console.log(payload);
      })

      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const cartReducer = cartSlice.reducer;
