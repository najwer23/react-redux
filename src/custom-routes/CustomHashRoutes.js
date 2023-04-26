import { Routes, Route, HashRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Main from "../main/Main";
import Error404 from '../pages/error404/Error404'


export default function CustomHashRoutes() {
	let routes = [
		{
			path: "*",
			element: <Error404 />
		},
		{
			path: "/",
			element: <Main />
		},
	];

	return (
		<HashRouter>
			<Routes>
				{routes.map(({path,element},i) => (
					<Route
						key={i}
						path={path}
						element={
							<>
								<ScrollToTop />
								{element}
							</>
						}
					/>
				))}
			</Routes>
		</HashRouter>
	);
}
