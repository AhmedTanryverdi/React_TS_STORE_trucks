import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NewType } from "../../../../shared/types";

export const getNews = createAsyncThunk(
	"getNews/newSlice",
	async (url: string): Promise<NewType[] | unknown> => {
		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error("error");
			}

			return response.json();
		} catch (error) {
			console.log(error);
		}
	}
);

const initialState: {
	news: NewType[];
} = {
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
		});
	},
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
