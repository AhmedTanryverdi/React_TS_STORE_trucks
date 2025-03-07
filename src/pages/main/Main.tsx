import React from "react";
import { Slider } from "./ui/slider/Slider";
import style from "./main.module.scss";
import { Home } from "./ui/home/Home";
import { About } from "./ui/about/About";
import { QuestionBlock } from "../../shared/components/index";
import { useNavigate } from "react-router-dom";

export const Main: React.FC = (): React.JSX.Element => {
	const navigate = useNavigate();
	return (
		<div className={style.main}>
			<div className={style.mainPromo}>
				<div className={style.promoTextContent}>
					<h2 className={style.title}>
						Завод-производитель автоспецтехники
					</h2>
					<p className={style.promoParagraph}>
						ООО «РусТрак» — это компания, занимающаяся производством
						и поставкой специализированной техники и спецтранспорта
					</p>
				</div>

				<div className={style.btns}>
					<button
						className={style.mainBtn}
						onClick={() => navigate("/allcategories")}
					>
						Категории
					</button>
					<button className={style.mainBtn}>Заказать звонок</button>
				</div>

				<Slider />
			</div>

			<Home />

			<About />

			<QuestionBlock />
		</div>
	);
};
