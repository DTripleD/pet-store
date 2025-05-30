import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./productOperations";

const initialState = {
  isLoading: true,
  error: "",
  productInfo: {
    name: "",
    categories: {
      animal_category: { name: "", key: "", id: 0 },
      product_category: { name: "", key: "", id: 0 },
    },
    description: "",
    images: [],
    price: "",
    discount_price: "",
  },
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productSlice = createSlice({
  name: "product",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.productInfo = payload;
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("animal/getAnimals/fulfilled"),
        handlePending
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const productReducer = productSlice.reducer;
