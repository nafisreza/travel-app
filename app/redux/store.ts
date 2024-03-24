import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./slice/apiSlice";
import countryReducer from "./slice/countrySlice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
    country: countryReducer, 
  },
});
