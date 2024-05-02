import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visaCountry: [],
    nationality: [],
    visaTypes: [],
}

const visaSlice = createSlice({
    name: 'visa',
    initialState,
    reducers: {
        setVisaCountry(state, action) {
            state.visaCountry = action.payload;
          },
          setNationality(state, action) {
            state.nationality = action.payload;
          },
          setVisaTypes(state, action) {
            state.visaTypes = action.payload;
          },
        }
})

export const { setVisaCountry, setNationality, setVisaTypes } = visaSlice.actions;

export default visaSlice.reducer;