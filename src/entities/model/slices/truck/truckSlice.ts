import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TruckType } from "../../../../shared/types";

export const getTrucks = createAsyncThunk(
	"getTrucks/truckSlice",
	async (url: string): Promise<TruckType[] | unknown> => {
		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error("error");
			}

			return response.json();
		} catch (error) {}
	}
);

const initialState: {
	trucks: TruckType[];
} = {
	trucks: [],
};

const truckSlice = createSlice({
	name: "truckSlice",
	initialState,
	reducers: {},

	extraReducers: (builder) => {
		builder.addCase(getTrucks.fulfilled, (state, actions) => {
			state.trucks = actions.payload as TruckType[];
		});
	},
});

export default truckSlice.reducer;
