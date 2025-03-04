import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../app/redux/store";
import { mediaLinks, navigateMenu } from "../../../../shared/utils/constants";
import { aboutLinks, categoryLinks } from "./utils/constants";
import { AccordionItem } from "./ui/AccordionItem";
import { setAccordion } from "../../../../entities/index";
import style from "./accordion.module.scss";

export const Accordion: React.FC = (): React.JSX.Element => {
	const [isVisibilityCategory, setVisibilityCategory] =
		React.useState<boolean>(true);
	const [isVisibilityAbout, setVisibilityAbout] =
		React.useState<boolean>(false);
	const [isVisibilityMedia, setVisibilityMedia] =
		React.useState<boolean>(false);

	React.useEffect(() => {
		if (window.innerWidth > 1320) {
			setVisibilityAbout(true);
			setVisibilityMedia(true);
		}
	}, []);

	const dispatch = useAppDispatch();
	const isAccordion = useSelector<RootState, boolean>(
		(state) => state.filter.isAccordion
	);

	const onChangeAccordion = (stateValue: boolean) => {
		dispatch(setAccordion(!stateValue));
	};

	return (
		<div className={style.accordion}>
			<div className={style.row}>
				<AccordionItem
					innerItem={{
						title: "Категории",
						list: categoryLinks,
						isVisibility: isVisibilityCategory,
						setVisibilityCategory,
						setVisibilityAbout,
						setVisibilityMedia,
					}}
				/>

				<AccordionItem
					innerItem={{
						title: "О нас",
						list: aboutLinks,
						isVisibility: isVisibilityAbout,
						setVisibilityCategory,
						setVisibilityAbout,
						setVisibilityMedia,
					}}
				/>

				<AccordionItem
					innerItem={{
						title: "Медиа",
						list: mediaLinks,
						isVisibility: isVisibilityMedia,
						setVisibilityCategory,
						setVisibilityAbout,
						setVisibilityMedia,
					}}
				/>

				<div className={style.col}>
					{navigateMenu.map((item, index) => {
						return (
							<h3 key={index} className={style.colTitle}>
								<Link
									to={Object.keys(item)[0]}
									onClick={() =>
										onChangeAccordion(isAccordion)
									}
								>
									{Object.values(item)[0]}
								</Link>
							</h3>
						);
					})}
				</div>
			</div>
		</div>
	);
};
