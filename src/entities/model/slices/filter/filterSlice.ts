import { createSlice } from "@reduxjs/toolkit";
import { AsideType } from "../../../../shared/utils/types";



const initialState: {
	isCatalog: boolean;
	inputText: string;
	isAccordion: boolean;
	aside: AsideType;
} = {
	isCatalog: false,
	inputText: "",
	isAccordion: false,
	aside: {
		option1: false,
		option2: false,
		option3: false,
		option4: false,
		option5: false,
		option6: false,
		option7: false,
		option8: false,
		option9: false,
	},
};

const filterSlice = createSlice({
	name: "filterSlice",
	initialState,
	reducers: {
		setCatalog(state, actions) {
			state.isCatalog = actions.payload;
		},
		setInputText(state, actions) {
			state.inputText = actions.payload;
		},
		setAccordion(state, actions) {
			state.isAccordion = actions.payload;
		},
		setAsideItem(state, actions) {
			const name = Object.keys(actions.payload)[0]
			const value = Object.values(actions.payload)[0];
			state.aside = {
				...state.aside,
				[name]: value,
			};
			
		},
	},
});


export const { setCatalog, setInputText, setAccordion, setAsideItem } =
	filterSlice.actions;
	
export default filterSlice.reducer;
