import React from "react";
import style from "./error.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/redux/store";

export const Error: React.FC = ({}): React.JSX.Element => {
    const error = useSelector<RootState, number>((state) => state.trucks.error);
	return (
		<div className={style.error}>
			<div className={style.container}>
				<div className={style.content}>
					<p>{error}</p>
					<p>Не удалось получить список товаров</p>
				</div>
			</div>
		</div>
	);
};
