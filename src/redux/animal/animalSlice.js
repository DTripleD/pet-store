import { createSlice } from "@reduxjs/toolkit";
import { getAnimalCategory, getAnimals } from "./animalOperations";

const initialState = {
  allAnimals: [{ id: 0, key: "", name: "", product_categories: [] }],
  currentAnimal: { id: 0, key: "", name: "", product_categories: [] },
  error: "",
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

const animalSlice = createSlice({
  name: "animal",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getAnimals.fulfilled, (state, { payload }) => {
        state.allAnimals = payload.data;
        state.isLoading = false;
      })
      .addCase(getAnimalCategory.fulfilled, (state, { payload }) => {
        state.currentAnimal = payload;
        state.isLoading = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

export const animalReducer = animalSlice.reducer;
