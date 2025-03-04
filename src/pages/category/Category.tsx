import React from "react";
import { useNavigate } from "react-router-dom";
import { categoryLinks } from "../../widgets/header/ui/accordion/utils/constants";
import style from "./category.module.scss";
import { useAppDispatch } from "../../app/redux/store";
import { getTrucks } from "../../entities";

export const Category: React.FC = (): React.JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const getThisProduct = (category: string) => {
		dispatch(
			getTrucks(`http://localhost:8000/trucks/?category=${category}`)
		);
		navigate(`/allcategories/${category}`);
	};

	return (
		<div className={style.categoty}>
			<div className={style.container}>
				<h2 className={style.title}>Категории товаров</h2>
				<div className={style.row}>
					{categoryLinks.map((item, index) => {
						return (
							<div
								key={index}
								className={style.categoryItem}
								onClick={() =>
									getThisProduct(Object.values(item)[0])
								}
							>
								<div className={style.inner}>
									<h3>{Object.values(item)[0]}</h3>
									<img
										src={require("../../shared/assets/images/category-image.png")}
										alt="category-image"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
