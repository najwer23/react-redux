import { useSelector, useDispatch } from "react-redux";
import * as FetchSlice from "./fetchSlice";
import { useState, useEffect } from "react";

export default function FetchTest() {
	const fetchData = useSelector((state) => state.fetch.data);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(FetchSlice.getFetchAsync());
	}, []);

	const addNewData = () => {
		dispatch(FetchSlice.postDataAsync({ userId: 42 }));
	};

	return (
		<section>
			<p>{fetchData && fetchData.userId}</p>

			<button onClick={addNewData}>Add new!</button>
		</section>
	);
};
