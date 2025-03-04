import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../app/redux/store";
import { TruckType } from "../../../shared/types";
import { CardTruck, getTrucks } from "../../../entities";
import style from "./onecategory.module.scss";

export const OneCategory: React.FC = (): React.JSX.Element => {
	const { type } = useParams();

	const dispatch = useAppDispatch();
	const trucks = useSelector<RootState, TruckType[]>(
		(state) => state.trucks.trucks
	);

	React.useEffect(() => {
		dispatch(getTrucks(`http://localhost:8000/trucks/?category=${type}`));
	}, [type]);

	if (!trucks?.length) {
		return <h1>{"Нет схожих товаров :("}</h1>;
	}
  
	return (
		<div className={style.categoryProduct}>
			<div className={style.container}>
				<div className={style.row}>
					{trucks.map((item, index) => {
						return <CardTruck key={index} {...item} />;
					})}
				</div>
			</div>
		</div>
	);
};
