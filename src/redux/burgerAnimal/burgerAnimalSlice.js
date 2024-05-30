import { createSlice } from "@reduxjs/toolkit";

const initialState = { animal: {} };

const burgerAnimalSlice = createSlice({
  name: "burgerAnimal",
  initialState,
  reducers: {
    selectAnimal: (state, action) => {
      state.animal = action.payload;
    },
  },
});

export const burgerAnimalReducer = burgerAnimalSlice.reducer;
export const { selectAnimal } = burgerAnimalSlice.actions;
