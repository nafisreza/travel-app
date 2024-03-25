import { createSlice } from '@reduxjs/toolkit';

const countrySlice = createSlice({
	name: 'country',
	initialState: {
		selected: null,
	},
	reducers: {
		setSelected: (state, action) => {
			state.selected = action.payload;
		},
	},
});

export const { setSelected } = countrySlice.actions;
export const selectedCountry = (state) => state.country.selected;

export default countrySlice.reducer;
