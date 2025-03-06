import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TruckType } from "../../../../shared/types";

export const getTrucks = createAsyncThunk(
	"getTrucks/truckSlice",
	async (
		url: string,
		{ rejectWithValue }
	): Promise<TruckType[] | unknown> => {
		try {
			const response = await fetch(url);

			if(!response.ok){
				return rejectWithValue(response.status);
			}

			return await response.json();

		} catch (error) {

			return rejectWithValue(500);
		}
	}
);

const initialState: {
	error: number;
	status: string;
	trucks: TruckType[];
} = {
	error: 200,
	status: "",
	trucks: [],
};

const truckSlice = createSlice({
	name: "truckSlice",
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(getTrucks.fulfilled, (state, actions) => {
			state.trucks = actions.payload as TruckType[];
			state.status = "fulfilled";
		});

		builder.addCase(getTrucks.rejected, (state, actions) => {
			state.error = actions.payload as number;
			state.status = "rejected";
		});

		builder.addCase(getTrucks.pending, (state) => {
			state.status = "pending";
		});
	},
});

export default truckSlice.reducer;
