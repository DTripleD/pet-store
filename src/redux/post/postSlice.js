import { createSlice } from "@reduxjs/toolkit";
import fetchBranches from "./postOperations";

const initialState = {
  branches: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchBranches.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(fetchBranches.fulfilled, (state, action) => {
      state.loading = false;
      state.branches = action.payload;
    })
    .addCase(fetchBranches.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
});

export default postSlice.reducer;