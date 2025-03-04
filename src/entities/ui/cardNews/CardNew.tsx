import React from "react";
import { NewType } from "../../../shared/types";
import style from "./cardnew.module.scss";
import { Link } from "react-router-dom";

export const CardNews: React.FC<NewType> = (
	props: NewType
): React.JSX.Element => {
	const { titleNews, data, image, id } = props;

	return (
		<div className={style.cardNew}>
			<div className={style.content}>
				<img
					src={require(`../../../shared/assets/images/trucks/${image}`)}
					alt="truck-image"
				/>
				<p className={style.data}>{data}</p>
				<h3 className={style.title}>{titleNews}</h3>
				<Link to={`/news/${id}`}>Подробнее &rarr;</Link>
			</div>
		</div>
	);
};
