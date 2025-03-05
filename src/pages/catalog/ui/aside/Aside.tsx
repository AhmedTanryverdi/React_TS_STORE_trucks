import React from "react";
import style from "./aside.module.scss";
import { RootState, useAppDispatch } from "../../../../app/redux/store";
import { getTrucks } from "../../../../entities/index";
import { useSelector } from "react-redux";
import { TruckType } from "../../../../shared/types";
import { asideItems } from "./utils/constant";
import { AsideType } from "../../../../shared/utils/types";
import { setAsideItem } from "../../../../entities/model/slices/filter/filterSlice";

export type CostType = {
	minValue: number;
	maxValue: number;
};

const cost: CostType = {
	minValue: 0,
	maxValue: 0,
};

export const Aside: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const trucks = useSelector<RootState, TruckType[]>(
		(state) => state.trucks.trucks
	);

	const aside = useSelector<RootState, AsideType>(
		(state) => state.filter.aside
	);

	const [products, setProducts] = React.useState<TruckType[]>([]);

	const handleCheckboxChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, checked, value } = event.target;
		dispatch(setAsideItem({ [name]: checked }));

		const updatedProducts = products.filter((product) =>
			product.model.includes(value)
		);
		setProducts(updatedProducts);
	};

	const [state, formAction] = React.useActionState(
		(currentState: any, formData: any) => {
			const data = {
				minValue: formData.get("minValue"),
				maxValue: formData.get("maxValue"),
			};

			dispatch(
				getTrucks(
					`http://localhost:8000/trucks/?price_gte=${data.minValue}&price_lte=${data.maxValue}`
				)
			);

			return data;
		},
		cost
	);

	React.useEffect(() => {
		setProducts(trucks);
	}, []);

	return (
		<aside className={style.aside}>
			<form action={formAction} className={style.form}>
				<div className={style.block}>
					<h3>Название фильтра 1</h3>
					<div>
						<input
							type="text"
							className={style.input}
							placeholder="Найти"
						/>
					</div>
					<div className={style.checkboxList}>
						{asideItems.map((item: Object, index: number) => {
							const key: string = Object.keys(item)[0];
							const value: string = Object.values(item)[0];
							return (
								<label key={index}>
									<input
										type="checkbox"
										name={key}
										checked={Object.values(aside)[index]}
										value={value}
										onChange={handleCheckboxChange}
									/>
									<p>{value}</p>
								</label>
							);
						})}
					</div>
				</div>

				<div className={style.block2}>
					<h3>Название фильтра 2</h3>
					<div className={style.checkboxlist2}>
						{Array.from({ length: 4 }, (_, i) => 20 + i * 3).map(
							(item, index) => {
								return (
									<label key={index}>
										<input type="checkbox" />
										<span>{item}</span>
									</label>
								);
							}
						)}
					</div>
				</div>

				<div className={style.block}>
					<h3>Название фильтра 3</h3>
					<input
						type="text"
						className={style.input}
						placeholder="Найти"
					/>

					<div className={style.checkboxList}>
						{asideItems.map((item: Object, index: number) => {
							const key = Object.keys(item)[0];
							const value = Object.values(item)[0];
							return (
								<label key={index}>
									<input
										type="checkbox"
										name={key}
										checked={Object.values(aside)[index]}
										value={value}
										onChange={handleCheckboxChange}
									/>
									<p>{value}</p>
								</label>
							);
						})}
					</div>
				</div>

				<div className={style.price}>
					<h3>Цена</h3>

					<div className={style.inputPrice}>
						<input
							type="text"
							name="minValue"
							placeholder="от 0&#8381;"
						/>
						<input
							type="text"
							name="maxValue"
							placeholder="до 350 000&#8381;"
						/>
					</div>
				</div>

				<button type="submit">
					Показать товары ({products?.length})
				</button>
			</form>
		</aside>
	);
};
