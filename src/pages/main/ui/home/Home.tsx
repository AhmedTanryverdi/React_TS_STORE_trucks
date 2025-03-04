import React from "react";
import style from "./home.module.scss";

export const Home: React.FC = (): React.JSX.Element => {
	return (
		<section className={style.home}>
			<div className={style.container}>
				<div className={style.row}>
					<div className={style.col}>
						<h2 className={style.title}>
							О компании <span>Рустрак</span>
						</h2>
						<p className={style.homeParagraph}>
							Наша компания не случайно занимает лидирующие
							позиции на рынке спецтехники: каждый день мы вносим
							свой вклад в развитие отечественного автопрома и
							укрепление российской экономики.
						</p>

						<p className={style.homeParagraph}>
							Наша компания снискала признание среди крупнейших
							отечественных корпораций и государственных структур,
							став поставщиком спецтехники для таких гигантов, как
							Газпром, Росатом, Россети, РСК «МИГ» и других.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
