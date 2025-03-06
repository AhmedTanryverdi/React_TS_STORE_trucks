import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EmployeeType } from "../../../../shared/types";

export const getEmployees = createAsyncThunk(
	"getEmployees/employeeSlice",
	async (
		{
			url,
			signal,
		}: {
			url: string;
			signal: AbortSignal;
		},
		{ rejectWithValue }
	): Promise<EmployeeType[] | unknown> => {
		try {
			const response = await fetch(url, { signal });

			if (!response.ok) {
				return rejectWithValue(response.status);
			}

			return await response.json();
		} catch (error) {
			rejectWithValue(500);
		}
	}
);

const initialState: {
	error: number;
	status: string;
	employees: EmployeeType[];
} = {
	error: 200,
	status: "",
	employees: [],
};

const employeeSlice = createSlice({
	name: "employeeSlice",
	initialState,
	reducers: {
		setEmloyees(state, actions) {
			state.employees = actions.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getEmployees.fulfilled, (state, actions) => {
			state.employees = actions.payload as EmployeeType[];
			state.status = "fulfilled";
		});

		builder.addCase(getEmployees.rejected, (state, actions) => {
			state.error = actions.payload as number;
			state.status = "rejected";
		});

		builder.addCase(getEmployees.pending, (state) => {
			state.status = "pending";
		});
	},
});

export const { setEmloyees } = employeeSlice.actions;
export default employeeSlice.reducer;
