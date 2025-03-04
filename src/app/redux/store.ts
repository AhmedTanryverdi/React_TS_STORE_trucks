import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import employeeSlice from "../../entities/model/slices/employee/employeeSlice";
import newsSlice from "../../entities/model/slices/news/newsSlice";
import truckSlice from "../../entities/model/slices/truck/truckSlice";
import filterSlice from "../../entities/model/slices/filter/filterSlice";

export const store = configureStore({
	reducer: {
		emloyees: employeeSlice,
		news: newsSlice,
		trucks: truckSlice,
		filter: filterSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
