import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import fetchSlice from "./features/fetch/fetchSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		fetch: fetchSlice,
	},
});

export default store;