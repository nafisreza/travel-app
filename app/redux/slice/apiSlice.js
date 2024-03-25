import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApi = createAsyncThunk('fetchApi', async () => {
	try {
		const response = await axios.get(
			'https://partner.guideasy.com/api/v1/auth-management/registration',
		);
		return response.data.payload;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
});
const apiSlice = createSlice({
	name: 'api',
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
		});
		builder.addCase(fetchApi.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export default apiSlice.reducer;
