import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    departure: [],
    departureId: null,
    destination: [],
    destinationId: [],
    category: [],
    packagePrice: null,
}

const holidaySlice = createSlice({
    name: 'holiday',
    initialState,
    reducers: {
          setDeparture(state, action) {
            state.departure = action.payload;
          },
          setDepartureId(state, action) {
            state.departureId = action.payload;
          },
          setDestination(state, action) {
            state.destination = action.payload;
          },
          setDestinationId(state, action) {
            state.destinationId = action.payload;
          },
          setCategory(state, action) {
            state.category = action.payload;
          },
          setPackagePrice(state, action) {
            state.packagePrice = action.payload;
          },
    }
})

export const { setDeparture, setDestination, setCategory, setDepartureId, setDestinationId, setPackagePrice } = holidaySlice.actions;

export default holidaySlice.reducer;