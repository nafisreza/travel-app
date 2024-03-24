import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    selectedCountry: null,
  },
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setSelectedCountry } = countrySlice.actions;

export default countrySlice.reducer;
