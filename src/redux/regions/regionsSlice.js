import { createSlice } from "@reduxjs/toolkit";
import fetchRegions from "./regionsOperations";

const initialState = {
  regions: [],
  loading: false,
  error: null,
}

const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchRegions.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(fetchRegions.fulfilled, (state, action) => {
      state.loading = false;
      state.regions = action.payload;
    })
    .addCase(fetchRegions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
});

export default regionsSlice.reducer;