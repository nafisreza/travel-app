import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './slice/apiSlice';
import countryReducer from './slice/countrySlice';
import visaReducer from './slice/visaSlice'
export const store = configureStore({
	reducer: {
		api: apiReducer,
		country: countryReducer,
		visa: visaReducer,
	},
});
