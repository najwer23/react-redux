import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import fetchReducer from "./features/fetch/fetchSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		fetch: fetchReducer,
	},
});

export default store;