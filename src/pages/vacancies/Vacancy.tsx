import React from "react";
import style from "./vacancy.module.scss";
import { VacancyItem } from "./ui/VacancyItem";
import { VacancyType } from "../../shared/types";
import { QuestionBlock } from "../../shared/components/index";

export const Vacancy: React.FC = (): React.JSX.Element => {
	const [vacancies, setVacancies] = React.useState<VacancyType[]>([]);

	React.useEffect(() => {
		fetch("http://localhost:8000/vacancies")
			.then((response) => response.json())
			.then((data) => {
				setVacancies(data);
			});
	}, []);

	if (vacancies.length === 0) {
		return (
			<h1
				style={{
					width: "100%",
					height: "50vh",
					padding: "20px",
				}}
			>
				Идет загрузка...
			</h1>
		);
	}

	return (
		<div className={style.vacancy}>
			<div className={style.container}>
				<h2 className={style.title}>Вакансии</h2>
				<div className={style.items}>
					{vacancies.map((item, index) => {
						return <VacancyItem key={index} {...item} />;
					})}
				</div>
			</div>
			<QuestionBlock />
		</div>
	);
};
