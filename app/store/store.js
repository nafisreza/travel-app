import { configureStore } from "@reduxjs/toolkit"
import holidayReducers from "../features/holiday/holidaySlice";
import visaReducers from "../features/visa/visaSlice";

const store = configureStore({
	reducer: {
		holiday: holidayReducers,
        visa: visaReducers,
	},
});

export default store;