import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import style from "./contact.module.scss";
import { EmployeeCard } from "../../entities/ui/cardEmployee/EmployeeCard";
import { EmployeeType } from "../../shared/types";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/redux/store";
import { getEmployees } from "../../entities/model/slices/employee/employeeSlice";

export const Contact: React.FC = (): React.JSX.Element => {
	const employees = useSelector<RootState, EmployeeType[]>(
		(state) => state.emloyees.employees
	);

	const dispatch = useAppDispatch();

	React.useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;

		dispatch(
			getEmployees({ url: "http://localhost:8000/employees", signal })
		);
	}, []);

	return (
		<div className={style.contact}>
			<div className={style.container}>
				<div className={style.row}>
					<div className={style.contactMap}>
						<h2 className={style.contactTitle}>Контакты</h2>
						<div className={style.block}>
							<div className={style.info}>
								<p>
									<span>603035 г. Нижний Новгород,</span>
									<span>ул.Торфяная, д.35</span>
								</p>

								<p>
									<span>Москва: 8 (495) 797-60-08</span>
									<span>
										Нижний Новгород: 8 (831) 225-00-55
									</span>
									<span>Для регионов: 8 (800) 77-77-210</span>
									<span>Электронная почта: info@rtrf.ru</span>
								</p>
								<div>
									<h4>Отдел гарантии</h4>
									<p>
										<span>Ярилин Александр Валерьевич</span>
										<span>
											Рабочий телефон: (831) 225-00-55
										</span>
										<span>
											(вн.124) Мобильный телефон: 8 953
											415 77 35
										</span>
										<span>
											Электронная почта: kb1@rtrf.ru
										</span>
									</p>
								</div>
							</div>
							<div className={style.mapContainer}>
								<YMaps query={{ lang: "en_RU" }}>
									<Map
										className={style.map}
										defaultState={{
											center: [55.75, 37.57],
											zoom: 9,
										}}
									>
										<Placemark
											modules={[
												"geoObject.addon.balloon",
											]}
											geometry={[55.684758, 37.738521]}
										/>
									</Map>
								</YMaps>
							</div>
						</div>
					</div>
					<h3>Сотрудники</h3>
					<div className={style.employees}>
						{employees.map((item, index) => {
							return (
								<EmployeeCard
									key={index}
									secondName={item.secondName}
									firstName={item.firstName}
									post={item.post}
									numbers={item.numbers}
									email={item.email}
									image={item.image}
									id={item.id}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
