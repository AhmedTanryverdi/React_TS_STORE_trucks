import React from "react";
import downBtn from "../../assets/icon/down.svg";
import style from "./listlink.module.scss";

export const ListLink: React.FC = (): React.JSX.Element => {
	const changeDrop = (e: React.MouseEvent<HTMLDivElement>) => {
		if (window.innerWidth < 768) {
			const drop: string =
				e.currentTarget.dataset.drop === "false" ? "true" : "false";
			e.currentTarget.setAttribute("data-drop", drop);
		}
	};

	return (
		<div className={style.listLink}>
			<div className={style.title} data-drop={window.innerWidth < 768 ? false: true} onClick={changeDrop}>
				<h3>Название блока</h3>
				<img
					src={downBtn}
					style={{
						display: `${
							window.innerWidth < 768 ? "inline-block" : "none"
						}`,
					}}
					alt="icon-down"
				/>
			</div>

			<ul>
				<li>Категории</li>
				<li>Каталог</li>
				<li>Избранное</li>
				<li>О компании</li>
				<li>Вакансии</li>
			</ul>
		</div>
	);
};
