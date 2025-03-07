import React from "react";
import router from "./provider/router";
import { YMaps } from "@pbe/react-yandex-maps";
import { RouterProvider } from "react-router-dom";


const App: React.FC = () => {
	return (
		<div className="App" style={{
			minHeight: "100vh",
			display: "flex",
			flexDirection: "column"

		}}>
			<RouterProvider router={router} />;
		</div>
	);
};

export default App;

			;