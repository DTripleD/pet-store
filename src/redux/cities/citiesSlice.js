import { createSlice } from "@reduxjs/toolkit";
import fetchCities from "./citiesOperations";

const initialState = {
  cities: [],
  loading: false,
  error: null,
}

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCities.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(fetchCities.fulfilled, (state, action) => {
      state.loading = false;
      state.cities = action.payload;
    })
    .addCase(fetchCities.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
});

export default citiesSlice.reducer;