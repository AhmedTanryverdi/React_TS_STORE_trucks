import React from "react";
import style from "./header.module.scss";
import logo from "../../shared/assets/icon/logo.svg";
import close from "../../shared/assets/icon/icon_close.svg";
import downBtn from "../../shared/assets/icon/down.svg";
import { Link, useNavigate } from "react-router-dom";
import { CallBtn } from "./ui/callbutton/CallBtn";
import { Accordion } from "./ui/accordion/Accordion";
import { RootState, useAppDispatch } from "../../app/redux/store";
import { useSelector } from "react-redux";
import {
	setAccordion,
	setCatalog,
} from "../../entities/model/slices/filter/filterSlice";
import { Fiter } from "./ui/fiter/Fiter";
import { MENU } from "./utils/constants";

export const Header: React.FC = (): React.JSX.Element => {
	const [isOpenTime, setOpenTime] = React.useState<boolean>(false);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const isCatalog = useSelector<RootState, boolean>(
		(state) => state.filter.isCatalog
	);
	const isAccordion = useSelector<RootState, boolean>(
		(state) => state.filter.isAccordion
	);

	const goToCatalog = () => {
		dispatch(setCatalog(!isCatalog));
		navigate("/catalog");
	};

	const dropDown = (e: any) => {
		if (!(e.target instanceof HTMLParagraphElement)) {
			setOpenTime(false);
		}
		
		if (e.target.parentNode instanceof HTMLLIElement) {
			const media = document.querySelector(".media");
			if (e.target.parentNode.className.includes("about")) {
				e.target.parentNode.children[2].setAttribute(
					"data-dropdown",
					"true"
				);

				
				media?.children[2].setAttribute("data-dropdown", "false");
			}

			if (e.target.parentNode.className.includes("media")) {
				e.target.parentNode.children[2].setAttribute(
					"data-dropdown",
					"true"
				);

				const about = document.querySelector(".about");
				about?.children[2].setAttribute("data-dropdown", "false");
			}
		} else {
			const about = document.querySelector(".about");
			about?.children[2].setAttribute("data-dropdown", "false");

			const media = document.querySelector(".media");
			media?.children[2].setAttribute("data-dropdown", "false");
		}
	};

	React.useEffect(() => {
		document.body.addEventListener("click", dropDown);

		return () => document.removeEventListener("click", dropDown);
	}, []);

	const onChangeAccordion = (stateValue: boolean) => {
		dispatch(setAccordion(!stateValue));
	};

	return (
		<header className={style.header}>
			<div className={style.container}>
				<div className={style.promo}>
					<div className={style.logoBlock}>
						<Link to={"/"}>
							<img
								src={logo}
								className={style.logoIcon}
								alt="logo"
							/>
						</Link>
						<div className={style.line}></div>
						<div className={style.textLogo}>
							<p>производство и продажа</p>
							<p>автоспецтехники</p>
						</div>
					</div>

					<div className={style.graph}>
						<div
							className={style.time}
							onClick={() => setOpenTime(!isOpenTime)}
						>
							<p id="graphID" className={style.graphText}>
								Время работы
								<img src={downBtn} alt="button-arrow" />
							</p>

							{isOpenTime && (
								<div className={style.graphTime}>
									<span>Пн-пт: с 8:00 до 18:00</span>
									<span>Сб-вс: с 10:00 до 16:00</span>
								</div>
							)}
						</div>
						<address className={style.address}>
							г. Нижний Новгород ул. Торфяная, 35
						</address>
					</div>

					<div className={style.contacts}>
						<div className={style.numbers}>
							<p>Для регионов: 8 (800) 77-77-210</p>
							<p>Нижний Новгород: 8 (831) 225-00-55</p>
						</div>
						<CallBtn />
					</div>
				</div>

				<div className={style.headerBody}>
					{isAccordion && (
						<div className={style.headerAccordion}>
							<Accordion />
						</div>
					)}

					<button type="button" className={style.catalogBtn}>
						{isAccordion ? (
							<img
								src={close}
								className={style.burgerBlock}
								alt="close"
								onClick={() => onChangeAccordion(isAccordion)}
							/>
						) : (
							<div
								className={style.burgerBlock}
								onClick={() => onChangeAccordion(isAccordion)}
							>
								<div className={style.line}></div>
								<div className={style.line}></div>
								<div className={style.line}></div>
							</div>
						)}

						<span onClick={goToCatalog}>Каталог</span>
					</button>

					<nav className={style.navigate}>
						<ul className={style.menu} onClick={dropDown}>
							{MENU.map((item, index) => {
								if ("path" in item) {
									return (
										<li
											key={index}
											className={style.menuItem}
										>
											<Link to={`/${item.path}`}>
												{item.title}
											</Link>
										</li>
									);
								}

								return (
									<li
										key={index}
										className={
											style.menuItem +
											" " +
											`${
												item.title === "О нас"
													? "about"
													: "media"
											}`
										}
									>
										<span>{item.title}</span>
										<img src={downBtn} alt="down-button" />
										<ul
											className={style.subMenu}
											data-dropdown="false"
										>
											{item.subMenu.map(
												(subItem, index) => {
													return (
														<li key={index}>
															<Link
																to={`${subItem.path}`}
															>
																{subItem.title}
															</Link>
														</li>
													);
												}
											)}
										</ul>
									</li>
								);
							})}
						</ul>
					</nav>
					<Fiter />
				</div>
			</div>
		</header>
	);
};
