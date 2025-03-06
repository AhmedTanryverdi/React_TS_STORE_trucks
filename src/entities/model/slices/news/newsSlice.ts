import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NewType } from "../../../../shared/types";

export const getNews = createAsyncThunk(
	"getNews/newSlice",
	async (url: string, { rejectWithValue }): Promise<NewType[] | unknown> => {
		const response = await fetch(url);
		if (!response.ok) {
			return rejectWithValue(response.status);
		}
		return response.json();
	}
);

const initialState: {
	error: number;
	status: string;
	news: NewType[];
} = {
	error: 200,
	status: "",
	news: [],
};

const newsSlice = createSlice({
	name: "newSlice",
	initialState,
	reducers: {
		setNews(state, actions) {
			state.news = actions.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getNews.fulfilled, (state, actions) => {
			state.news = actions.payload as NewType[];
			//state.status = "fulfilled";
		});

		builder.addCase(getNews.rejected, (state, actions) => {
			state.error = actions.payload as number;
			state.status = "rejected";
			console.log("[error]: ", state.error)
		});

		builder.addCase(getNews.pending, (state) => {
			state.status = "pending";
		});
	},
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
