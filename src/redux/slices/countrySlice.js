import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
  loading: false,
};
export const getCountries = createAsyncThunk("getCountries", async () => {
  try {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
});
export const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getCountries.fulfilled, (state, action) => {
      console.log("action", action.payload);
      state.value = action.payload;
      state.loading = false;
    });
  },
});

export default countrySlice.reducer;
