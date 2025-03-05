import React from "react";
import downBtn from "../../../../../shared/assets/icon/down.svg";
import style from "./accordionItem.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../../app/redux/store";
import { setAccordion } from "../../../../../entities/index";

export const AccordionItem: React.FC<{
	innerItem: {
		title: string;
		list: Object[];
		isVisibility: boolean;
		setVisibilityCategory: (state: boolean) => void;
		setVisibilityAbout: (state: boolean) => void;
		setVisibilityMedia: (state: boolean) => void;
	};
}> = ({ innerItem }): React.JSX.Element => {
	const {
		title,
		list,
		isVisibility,
		setVisibilityCategory,
		setVisibilityAbout,
		setVisibilityMedia,
	} = innerItem;

	const dispatch = useAppDispatch();
	const isAccordion = useSelector<RootState, boolean>(
		(state) => state.filter.isAccordion
	);

	const onChangeAccordion = (stateValue: boolean) => {
		dispatch(setAccordion(!stateValue));
	};

	const onChangeState = () => {
		if (window.innerWidth <= 1320) {
			if (title === "Категории") {
				setVisibilityCategory(!isVisibility);
				setVisibilityAbout(false);
				setVisibilityMedia(false);
			} else if (title === "О нас") {
				setVisibilityCategory(false);
				setVisibilityAbout(!isVisibility);
				setVisibilityMedia(false);
			} else {
				setVisibilityCategory(false);
				setVisibilityAbout(false);
				setVisibilityMedia(!isVisibility);
			}
		}
	};

	return (
		<div className={style.col}>
			<h3 className={style.colTitle} onClick={onChangeState}>
				{title}
				<img src={downBtn} alt="down-button" />
			</h3>
			{isVisibility && (
				<div className={style.colItem}>
					{list.map((item, index) => {
						return (
							<Link
								key={index}
								to={
									title === "Категории"
										? Object.keys(item)[0] ===
										  "allcategories"
											? Object.keys(item)[0]
											: `/allcategories/${
													Object.values(item)[0]
											  }`
										: Object.keys(item)[0]
								}
								onClick={() => onChangeAccordion(isAccordion)}
							>
								{Object.values(item)[0]}
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
};
