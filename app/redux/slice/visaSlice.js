import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = createAsyncThunk("fetchApi", async () => {
    const URL = "http://endorse.guideasy.com/api/v1/client-management/countries";

    axios.get(URL, {
        headers: {
          Authorization: 'Bearer 354|SRmsDVJRGG7gE6nPDNptMUgAFvnXxtRWMP1J9V9aeac014f2',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': 'en'
        }
      })
      .then(response => {
        return response.data.payload
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
});



const visaSlice = createSlice({
  name: "visa",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log("Fetched data:", action.payload);
    });
    builder.addCase(fetchApi.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default visaSlice.reducer;