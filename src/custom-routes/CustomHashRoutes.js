import { Routes, Route, HashRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Main from "../main/Main";
import Error404 from '../pages/error404/Error404'
import FetchTest from '../features/fetch/FetchTest'


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
		{
			path: "/fetch",
			element: <FetchTest />
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
