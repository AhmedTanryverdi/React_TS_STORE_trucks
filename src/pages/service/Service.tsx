import React from "react";
import style from "./service.module.scss";
import { EmployeeCard } from "../../entities/ui/cardEmployee/EmployeeCard";
import { QuestionBlock } from "../../shared/components";

export const Service: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.service}>
			<div className={style.container}>
				<div className={style.home}>
					<div className={style.card}>
						<EmployeeCard
							id={1}
							firstName="Сергей"
							secondName="Шаронов"
							post="Генеральный директор"
							numbers={["8 (831) 415-35-93", "8 (831) 225-00-55"]}
							email="komdir@rtrf.ru"
							image="SharonovSergey.png"
						/>
					</div>

					<div className={style.block}>
						<h2 className={style.title}>Сервис и гарантии</h2>
						<div className={style.text}>
							После приобретения продукции в ООО «Рустрак» вы
							всегда можете обратиться за помощью по любым
							вопросам, связанными с гарантийным обслуживанием,
							настройкой и ремонтом транспорного средства,
							поставкой дополнительного обурудования, а также
							внесением доработок под задачи клиента. Вы можете
							обратиться за технической поддержкой и консультацией
							по эксплуатации в любое время и в любой срок после
							заключения контракта.
						</div>
						<div className={style.support}>
							<h3 className={style.supportTitle}>
								Как получить поддержку?
							</h3>
							<ul className={style.supportItems}>
								<li className={style.item}>
									<p>
										Заполнить Рекламационный акт с внесением
										подписи ответственного лица и печати
										организации, подробно описать характер
										отказа. Приложить фото: шильды в
										пассажирской двери, шильды вышедшего из
										строя оборудования, первая страница ПТС.
									</p>
								</li>
								<li className={style.item}>
									<p>
										Сфотографировать неисправности, а также
										общий вид изделия в целом. Прежде всего,
										существующая теория влечет за собой
										процесс внедрения и модернизации
										поэтапного и последовательного развития
										общества.
									</p>
								</li>
								<li className={style.item}>
									<p>
										Отправить заполненный акт, копию ПТС,
										фотографии неисправностей по электронной
										почте: kb1@rtrf.ru
									</p>
								</li>
							</ul>

							<p className={style.paragraph}>
								После этого специалисты гарантийной службы
								свяжутся с владельцем и предложат варианты
								организации ремонта.
							</p>
							<p className={style.paragraph}>
								Любые вопросы относительно гарантийного
								обслуживания техники производства «РусТрак»
								можно задать по телефону (831) 225-00-55 (доб
								124) или по электронной почте: kb1@rtrf.ru
							</p>
						</div>
					</div>
				</div>
			</div>
			<QuestionBlock />
		</div>
	);
};
