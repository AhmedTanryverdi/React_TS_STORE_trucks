import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../widgets/index";

export const Root: React.FC = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
