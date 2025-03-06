import React from "react";
import style from "./aboutcompony.module.scss";
import { QuestionBlock } from "../../shared/components";

export const AboutCompany: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.aboutCompony}>
			<div className={style.promo}>
				<p>
					Автомобильный завод «РусТрак» - ведущий производитель
					коммерческого транспорта и специализированной техники в
					Нижнем Новгороде.
				</p>
			</div>
			<div className={style.container}>
				<section className={style.home}>
					<div className={style.left}>
						<h2>Сегодня ООО «Рустрак» - это:</h2>
						<div className={style.list}>
							<ul>
								<li>
									3 производственных корпуса, общей площадью
									более 7000 м2;
								</li>
								<li>
									производственная территория более 20000 м2;
								</li>
								<li>
									служба качества, гарантирующая выпуск
									высококачественной техники;
								</li>
							</ul>
							<ul>
								<li>
									современный парк станочного оборудования;
								</li>
								<li>
									ежемесячный объем выпускаемой техники - до
									110 единиц.
								</li>
								<li>
									наличие собственной
									конструкторско-технологической службы
								</li>
							</ul>
						</div>
					</div>
					<div className={style.right}></div>
				</section>
			</div>
			<section className={style.technics}>
				<div className={style.inner}>
					<div>
						<h3>Отрасли применения выпускаемой техники: </h3>
						<p>
							Cтроительная, телекоммуникационная, коммунальная,
							дорожное хозяйство, логистика, сельское хозяйство.
						</p>
					</div>
					<div>
						<h3>Выпускаемая техника: </h3>
						<p>
							Краны-манипуляторы, автотопливозаправщики,
							автовышки, фургоны, самосвалы, бортовые платформы,
							эвакуаторы, крюковые погрузчики, мастерские, пищевые
							цистерны, вакуумные машины, автогидроподъемники.
						</p>
					</div>
				</div>
			</section>
      <QuestionBlock />
		</div>
	);
};
