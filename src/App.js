import "./App.css";
import CustomHashRoutes from "./custom-routes/CustomHashRoutes";

import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
		<>
			<Provider store={store}>
				<CustomHashRoutes />
			</Provider>
		</>
	);
}
