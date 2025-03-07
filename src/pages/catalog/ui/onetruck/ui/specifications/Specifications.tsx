import React from "react";
import style from "./specifications.module.scss";
import { TruckType } from "../../../../../../shared/types";

export const Specifications: React.FC<TruckType> = (
	props: TruckType
): React.JSX.Element => {
	const { size, volume, LoadCapacity } = props;

	return (
		<section className={style.specifications}>
			<div className={style.container}>
				<div className={style.title}>
					<h2>Характеристики</h2>
					<button type="button">Получить КП</button>
				</div>

				<div className={style.specificationsBody}>
					<div className={style.item}>
						<h3>Название группы характеристик</h3>
						<ul>
							<li>
								<span>Габариты ТС</span>
								<span></span>
								<span>{props.size}</span>
							</li>
							<li>
								<span>Грузоподъёмность</span>
								<span></span>
								<span>{LoadCapacity}</span>
							</li>
							<li>
								<span>Внутренний объём</span>
								<span></span>
								<span>{volume}</span>
							</li>
							<li>
								<span>Внутренний объём объём</span>
								<span></span>
								<span>{volume}</span>
							</li>
							<li>
								<span>Грузоподъёмность</span>
								<span></span>
								<span>{LoadCapacity}</span>
							</li>
							<li>
								<span>Внутренний объём</span>
								<span></span>
								<span>{volume}</span>
							</li>
							<li>
								<span>Внутренний объём объём</span>
								<span></span>
								<span>{volume}</span>
							</li>
						</ul>
					</div>

					<div className={style.item}>
						<h3>Название группы характеристик</h3>
						<ul>
							<li>
								<span>Габариты ТС</span>
								<span></span>
								<span>{size}</span>
							</li>
							<li>
								<span>Грузоподъёмность</span>
								<span></span>
								<span>{LoadCapacity}</span>
							</li>
							<li>
								<span>Внутренний объём</span>
								<span></span>
								<span>{volume}</span>
							</li>
							<li>
								<span>Внутренний объём объём</span>
								<span></span>
								<span>{volume}</span>
							</li>
						</ul>
					</div>

					<div className={style.item}>
						<h3>Название группы характеристик</h3>
						<ul>
							<li>
								<span>Габариты ТС</span>
								<span></span>
								<span>{size}</span>
							</li>
							<li>
								<span>Грузоподъёмность</span>
								<span></span>
								<span>{LoadCapacity}</span>
							</li>
							<li>
								<span>Внутренний объём</span>
								<span></span>
								<span>{volume}</span>
							</li>
							<li>
								<span>Внутренний объём объём</span>
								<span></span>
								<span>{volume}</span>
							</li>
						</ul>
					</div>

					<div className={style.item}>
						<h3>Название группы характеристик</h3>
						<ul>
							<li>
								<span>Габариты ТС</span>
								<span></span>
								<span>{size}</span>
							</li>
							<li>
								<span>Грузоподъёмность</span>
								<span></span>
								<span>{LoadCapacity}</span>
							</li>
							<li>
								<span>Внутренний объём</span>
								<span></span>
								<span>{volume}</span>
							</li>
							<li>
								<span>Внутренний объём объём</span>
								<span></span>
								<span>{volume}</span>
							</li>
						</ul>
					</div>

					<div className={style.item}>
						<h3>Название группы характеристик</h3>
						<ul>
							<li>
								<span>Габариты ТС</span>
								<span></span>
								<span>{size}</span>
							</li>
							<li>
								<span>Грузоподъёмность</span>
								<span></span>
								<span>{LoadCapacity}</span>
							</li>
							<li>
								<span>Внутренний объём</span>
								<span></span>
								<span>{volume}</span>
							</li>
							<li>
								<span>Внутренний объём объём</span>
								<span></span>
								<span>{volume}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
