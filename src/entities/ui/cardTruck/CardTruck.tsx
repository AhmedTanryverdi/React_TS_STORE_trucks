import React from "react";
import style from "./cardTruck.module.scss";
import { TruckType } from "../../../shared/types";
import favorite from "../../../shared/assets/icon/favorite.svg";
import { useNavigate } from "react-router-dom";

export const CardTruck: React.FC<TruckType> = (props): React.JSX.Element => {
	const { model, price, image, id } = props;

	const navigate = useNavigate();

	const addToFavorite = () => {
		if (props) {
			fetch("http://localhost:8000/favorites", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(props),
			});
		}
	};
	return (
		<div className={style.CardTruck}>
			<img
				src={favorite}
				alt="favorite-icon"
				className={style.favorite}
				onClick={addToFavorite}
			/>
			<img
				src={require(`../../../shared/assets/images/trucks/${image}`)}
				alt="truck-image"
			/>
			<div className={style.model}>
				<p>{model}</p>
			</div>
			<p className={style.price}>от {price} &#8381;</p>
			<button
				type="button"
				className={style.btn}
				onClick={() => navigate(`/onetruck/${id}`)}
			>
				Подробнее
			</button>
		</div>
	);
};
