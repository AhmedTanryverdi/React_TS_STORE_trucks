import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../app/redux/store";
import { TruckType } from "../../../shared/types";
import { CardTruck, getTrucks } from "../../../entities";
import { Error } from "../../../shared/components/error/Error";
import style from "./onecategory.module.scss";
import { Pending } from "../../../shared/components/pending/Pending";
import { Zero } from "../../../shared/components/zero/Zero";

export const OneCategory: React.FC = (): React.JSX.Element => {
	const { type } = useParams();

	const dispatch = useAppDispatch();
	const trucks = useSelector<RootState, TruckType[]>(
		(state) => state.trucks.trucks
	);

	const error = useSelector<RootState, number>((state) => state.trucks.error);
	const status = useSelector<RootState, string>(
		(state) => state.trucks.status
	);

	React.useEffect(() => {
		dispatch(getTrucks(`http://localhost:8000/trucks/?category=${type}1`));
		console.log("[status]:", status);
	}, [type]);

	if (status === "pending") {
		return <Pending />
	} else if (status === "rejected") {
		return <Error error={error} />;
	}

	if(!trucks.length){
		return <Zero />
	}

	return (
		<div className={style.categoryProduct}>
			<div className={style.container}>
				<h2>{type}</h2>
				<div className={style.row}>
					{trucks.map((item, index) => {
						return <CardTruck key={index} {...item} />;
					})}
				</div>
			</div>
		</div>
	);
};
