import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import arrow from "../../shared/assets/icon/arrows/Vector.svg";
import { Description } from "./ui/description/Description";
import { Drawing } from "./ui/drawing/Drawing";
import { QuestionBlock } from "../../shared/components/index";
import { TruckType } from "../../shared/types";
import { Specifications } from "./ui/specifications/Specifications";
import style from "./onetruck.module.scss";



const images = Array.from({ length: 6 }, (_, i) => i);

export const OneTruck: React.FC = (): React.JSX.Element => {
	const { id } = useParams();
	const [currentTruck, setCurrentTruck] = React.useState<TruckType[] | null>(
		null
	);

	const [currentImg, setCurrentImg] = React.useState(0);
	const [listPosition, setListPosition] = React.useState(0);
	const refUL = useRef<HTMLUListElement>(null);
	const refDiv = useRef<HTMLDivElement>(null);

	const slide = () => {
		const limit =
			Number(refUL.current?.offsetHeight) -
			Number(refDiv.current?.offsetHeight);

		const segment = Math.floor(limit / 6);
		console.log(limit, segment * currentImg);
		if (currentImg < 5) {
			setListPosition(listPosition - segment);
			setCurrentImg(currentImg + 1);
		} else {
			setListPosition(0);
			setCurrentImg(0);
		}
	};

	const addToFavorite = () => {
		if (currentTruck) {
			fetch("http://localhost:8000/favorites", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(currentTruck[0]),
			});
		}
	};

	React.useEffect(() => {
		fetch(`http://localhost:8000/trucks/?id=${id}`)
			.then((response) => response.json())
			.then((data) => setCurrentTruck(data));
	}, []);

	if (!currentTruck) {
		return <h1>Загрузка...</h1>;
	}

	return (
		<div className={style.oneTruck}>
			<div className={style.container}>
				<div className={style.content}>
					<h2 className={style.title}>
						HINO 300-640 АГП PALFINGER P200A
					</h2>
					<div className={style.row}>
						<div className={style.gallery}>
							<div className={style.imagesBlock}>
								<div ref={refDiv} className={style.listBlock}>
									<ul
										ref={refUL}
										className={style.listImages}
										style={{ top: `${listPosition}px` }}
									>
										{images.map((item, index) => {
											return (
												<li
													key={index}
													onClick={() =>
														setCurrentImg(item)
													}
													style={
														currentImg === item
															? {
																	border: "1px solid #FEC80B",
															  }
															: {}
													}
												>
													<img
														src={require(`../../shared/assets/images/trucks/trucks/image${item}.png`)}
														alt="truck-image"
													/>
												</li>
											);
										})}
									</ul>
								</div>

								<img
									src={arrow}
									className={style.arrow}
									onClick={slide}
									alt="arrow"
								/>
							</div>

							<div className={style.mainImage}>
								<img
									src={require(`../../shared/assets/images/trucks/trucks/image${currentImg}.png`)}
									alt="truck-image"
								/>
							</div>
						</div>
						<div className={style.aboutTruck}>
							<p>
								от {currentTruck[0].price}₽{" "}
								<span>320 650₽</span>
							</p>
							<div className={style.btns}>
								<button type="button">
									Добавить в корзину
								</button>
								<button type="button">Получить КП</button>
							</div>
							<ul className={style.listAction}>
								<li onClick={addToFavorite}>
									<img
										src={require("../../shared/assets/icon/toFavorite.png")}
										alt="add-to-favorite-image"
									/>
									<p>В избранное</p>
								</li>
								<li>
									<img
										src={require("../../shared/assets/icon/share.png")}
										alt="share"
									/>
									<p>Поделиться</p>
								</li>
							</ul>
							<ul className={style.listSpecification}>
								<li>
									<span>Габариты ТС</span>
									<span></span>
									<span>{currentTruck[0].size}</span>
								</li>
								<li>
									<span>Грузоподъёмность</span>
									<span></span>
									<span>{currentTruck[0].LoadCapacity}</span>
								</li>
								<li>
									<span>Внутренний объём</span>
									<span></span>
									<span>{currentTruck[0].volume}</span>
								</li>
							</ul>
						</div>
					</div>

					<Description />
					<Drawing />
					<Specifications {...currentTruck[0]} />
					<QuestionBlock />
				</div>
			</div>
		</div>
	);
};
