import { useSelector, useDispatch } from "react-redux";
import * as counterSlice from "./counterSlice";
import { useState } from "react";

const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	const [incrementAmount, setIncrementAmount] = useState(0);
	const addValue = Number(incrementAmount) || 0;

	const resetAll = () => {
		setIncrementAmount(0);
		dispatch(counterSlice.reset());
	};

	return (
		<section>

			<p>{count}</p>

			<div>
				<button onClick={() => dispatch(counterSlice.increment())}>+</button>
				<button onClick={() => dispatch(counterSlice.decrement())}>-</button>
			</div>

			<input
				type="text"
				value={incrementAmount}
				onChange={(e) => setIncrementAmount(e.target.value)}
			/>

			<div>
				<button
					onClick={() => dispatch(counterSlice.incrementByAmount(addValue))}
				>
					Add Amount
				</button>
				<button onClick={resetAll}>Reset</button>
			</div>
		</section>
	);
};

export default Counter;
