import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EmployeeType } from "../../../../shared/types";

export const getEmployees = createAsyncThunk(
	"getEmployees/employeeSlice",
	async ({
		url,
		signal,
	}: {
		url: string;
		signal: AbortSignal;
	}): Promise<EmployeeType[] | unknown> => {
		try {
			const response = await fetch(url, { signal });

			if (!response.ok) {
				throw new Error("error");
			}

			return await response.json();
		} catch (error) {
			console.log(error);
		}
	}
);

const initialState: {
	employees: EmployeeType[];
} = {
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
		});
	},
});

export const { setEmloyees } = employeeSlice.actions;
export default employeeSlice.reducer;
