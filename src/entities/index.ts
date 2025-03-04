import { setEmloyees } from "./model/slices/employee/employeeSlice";
import { setCatalog, setInputText, setAccordion } from "./model/slices/filter/filterSlice";
import { getNews, setNews } from "./model/slices/news/newsSlice";
import { getTrucks } from "./model/slices/truck/truckSlice";
import { EmployeeCard } from "./ui/cardEmployee/EmployeeCard";
import { CardNews } from "./ui/cardNews/CardNew";
import { CardTruck } from "./ui/cardTruck/CardTruck";

export { EmployeeCard, CardNews, CardTruck, setNews };

export {
	setEmloyees,
	setCatalog,
	setInputText,
	setAccordion,
	getNews,
	getTrucks,
};