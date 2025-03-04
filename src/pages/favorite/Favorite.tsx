import React from "react";
import style from "./favorite.module.scss";
import { CardTruck } from "../../entities/index";
import { TruckType } from "../../shared/types";
import { QuestionBlock } from "../../shared/components/index";

export const Favorite: React.FC = (): React.JSX.Element => {
	const [favorite, setFavorite] = React.useState<TruckType[]>([]);
	const [likeProducts, setLikeProducts] = React.useState<TruckType[]>([]);

	React.useEffect(() => {
		fetch("http://localhost:8000/favorites")
			.then((response) => response.json())
			.then((data) => setFavorite(data));

		fetch("http://localhost:8000/trucks?_limit=4")
			.then((response) => response.json())
			.then((data) => setLikeProducts(data));
	}, []);

	if (!favorite.length) {
		return (
			<h1 style={{ height: "100vh", width: "1320px", margin: "0 auto" }}>
				Пусто
			</h1>
		);
	}

	return (
		<div className={style.favorite}>
			<div className={style.container}>
				<h2>Избранное</h2>
				<div className={style.row}>
					{favorite.map((item, index) => {
						return <CardTruck key={index} {...item} />;
					})}
				</div>

				<div className={style.likeProducts}>
					<h2>Похожие товары</h2>
					<div className={style.products}>
						{likeProducts.map((item, index) => {
							return <CardTruck key={index} {...item} />;
						})}
					</div>
				</div>
				<QuestionBlock />
			</div>
		</div>
	);
};
