import { createBrowserRouter } from "react-router-dom";
import { AboutCompany } from "../../pages/index";
import { Catalog } from "../../pages/index";
import { Contact } from "../../pages/index";
import { Favorite } from "../../pages/index";
import { Main } from "../../pages/index";
import { News } from "../../pages/index";
import { OneNews } from "../../pages/index";
import { OneTruck } from "../../pages/index";
import { Partners } from "../../pages/index";
import { Production } from "../../pages/index";
import { Service } from "../../pages/index";
import { Vacancy } from "../../pages/index";
import { Root } from "../ui/Root";
import { Suppliers } from "../../pages/index";
import { FeedBack } from "../../pages/index";
import { Certificates } from "../../pages/index";
import { Credit } from "../../pages/index";
import { Category } from "../../pages/category/Category";
import { OneCategory } from "../../pages/category/onecategory/OneCategory";



const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "",
				element: <Main />,
			},
			{
				path: "contacts",
				element: <Contact />,
			},
			{
				path: "service",
				element: <Service />,
			},
			{
				path: "news",
				element: <News />,
			},
			{
				path: "news/:id",
				element: <OneNews />,
			},
			{
				path: "onetruck/:id",
				element: <OneTruck />,
			},
			{
				path: "catalog",
				element: <Catalog />,
			},
			{
				path: "vacancies",
				element: <Vacancy />,
			},
			{
				path: "favorite",
				element: <Favorite />,
			},
			{
				path: "aboutcompany",
				element: <AboutCompany />,
			},
			{
				path: "partners",
				element: <Partners />,
			},
			{
				path: "production",
				element: <Production />,
			},
			{
				path: "suppliers",
				element: <Suppliers />,
			},
			{
				path: "feedBack",
				element: <FeedBack />,
			},
			{
				path: "certificates",
				element: <Certificates />,
			},
			{
				path: "credit",
				element: <Credit />,
			},
			{
				path: "allcategories",
				element: <Category />,
			},
			{
				path: "allcategories/:type",
				element: <OneCategory />,
			},
		],
	},
]);

export default router;
