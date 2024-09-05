import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

const fetchBranches = createAsyncThunk(
  "branches/fetchAll",
  async ({ settlement_ref, TypeOfWarehouse }, thunkAPI) => {
    try {
      const { data } = await instance.get('/warehouse/', {
        params: {
          settlement_ref,
          TypeOfWarehouse,
        }
      });
      console.log('Branches:', data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export default fetchBranches;

