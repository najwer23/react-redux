import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: {"userId": "Mariusz", "2": "Michał"},
};

export const fetchSlice = createSlice({
	name: "fetch",
	initialState,
	reducers: {
		get: (state, action) => {
			state.data = action.payload
		},
		post: (state, action) => {
			state.data = action.payload
		}
	}
});

export const getFetchAsync = (data) => async (dispatch) => {
	try {
		const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((json) => dispatch(get(json)));

	} catch (err) {
		throw new Error(err);
	}
};

export const postDataAsync = (data) => async (dispatch) => {
	try {
		dispatch(post(data))
	} catch (err) {
		throw new Error(err);
	}
};

export const { post, get } = fetchSlice.actions;
export default fetchSlice.reducer;


// https://codesandbox.io/s/yjdwp?file=/src/App.js:231-235