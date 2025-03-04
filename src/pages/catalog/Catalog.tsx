import React from "react";
import style from "./catalog.module.scss";
import { RootState, useAppDispatch } from "../../app/redux/store";
import { useSelector } from "react-redux";
import { TruckType } from "../../shared/types";
import { getTrucks } from "../../entities/index";
import { CardTruck } from "../../entities/index";
import { Pagination } from "../../features/index";
import { QuestionBlock } from "../../shared/components/index";
import { Aside } from "./ui/aside/Aside";
import { setCatalog } from "../../entities/index";

export const Catalog: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const trucks = useSelector<RootState, TruckType[]>(
		(state) => state.trucks.trucks
	);
	const isCatalog = useSelector<RootState, boolean>(
		(state) => state.filter.isCatalog
	);

	React.useEffect(() => {
		dispatch(getTrucks("http://localhost:8000/trucks"));

		if (window.innerWidth < 1320) {
			dispatch(setCatalog(false));
		}
	}, []);

	const countElmentsPage: number = 5;
	const countPages: number = Math.ceil(trucks.length / countElmentsPage);

	const [start, setStart] = React.useState<number>(0);
	const currentTruckArr =
		start + countElmentsPage < trucks.length
			? trucks.slice(start, start + countElmentsPage)
			: trucks.slice(start);

	if (!currentTruckArr.length) {
		return (
			<div style={{ display: "flex" }}>
				<Aside />
				<h1>{"Не получилось загрузить товары :("}</h1>
			</div>
		);
	}
	return (
		<div className={style.catalog}>
			<div className={style.container}>
				<h2 className={style.catalogTitle}>
					Найдено <span>{trucks.length} товаров</span>
				</h2>
				<div className={style.content}>
					<button
						type="button"
						className={style.filterBtn}
						onClick={() => {
							dispatch(setCatalog(!isCatalog));
						}}
					>
						<img
							src={require("../../shared/assets/icon/filterSetting.png")}
							alt="setting-image"
						/>
						<span>Фильтры</span>
					</button>
					{isCatalog && <Aside />}

					<div className={style.cardBlock}>
						{currentTruckArr.map((item, index) => {
							return <CardTruck key={index} {...item} />;
						})}
					</div>
				</div>

				<div className={style.paginationBlock}>
					<Pagination
						count={countPages}
						start={start}
						countElmentsPage={countElmentsPage}
						setStart={setStart}
					/>
				</div>

				<QuestionBlock />
			</div>
		</div>
	);
};
