import React from "react";
import style from "./anotherNewsCard.module.scss";
import { NewType } from "../../../../../shared/types";
import { Link } from "react-router-dom";

export const AnotherNewsCard: React.FC<NewType> = (item): React.JSX.Element => {
	return (
		<div className={style.item}>
			<p>{item.data}</p>
			<p>{item.titleNews}</p>
			<Link to={`/news/${item.id}`}>Подробнее &rarr;</Link>
		</div>
	);
};
