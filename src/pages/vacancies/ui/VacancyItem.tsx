import React from "react";
import { VacancyType } from "../../../shared/types";
import arrow from "../../../shared/assets/icon/arrows/Vector.svg";
import style from "./vacancyItem.module.scss";

export const VacancyItem: React.FC<VacancyType> = (
	props
): React.JSX.Element => {
	const { name, description, responsibilities, requirement, conditions } =
		props;

	const [openVacancy, setOpenVacancy] = React.useState(false);
	return (
		<div className={style.vacancyItem}>
			<h2
				className={style.title}
				onClick={() => setOpenVacancy(!openVacancy)}
				style={{
					backgroundColor: openVacancy ? "#FEC80B" : "#fff",
				}}
			>
				<img
					src={arrow}
					alt="arrow"
					style={{
						rotate: openVacancy ? "180deg" : "0deg",
					}}
				/>
				<span>{name}</span>
				<span>{description}</span>
			</h2>
			<div
				className={style.vacancyBody}
				style={{ display: openVacancy ? "block" : "none" }}
			>
				<div>
					<p>Обязанности:</p>
					<ul>
						{responsibilities.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</div>

				<div>
					<p>Требования:</p>
					<ul>
						{requirement.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</div>

				<div>
					<p>Условия:</p>
					<ul>
						{conditions.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</div>

				<div className={style.btns}>
					<button type="button">Откликнуться</button>
					<button type="button">Открыть на hh.ru</button>
				</div>
			</div>
		</div>
	);
};
