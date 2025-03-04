import React from "react";
import style from "./footer.module.scss";
import { ListLink } from "../../shared/components/index";

export const Footer: React.FC = (): React.JSX.Element => {
	return (
		<footer className={style.footer}>
			<div className={style.container}>
				<div className={style.left}>
					<address className={style.address}>
						<p>Тел/факс: 8(831) 225-00-55</p>
						<p>Email: info@rtrf.ru</p>
						<p>Нижний Новгород, ул. Торфяная, 35</p>
					</address>

					<button type="button" className={style.orderCallBtn}>
						Заказать звонок
					</button>

					<div className={style.another}>
						<span>2009 - 2021 © Rus - Trucks</span>
						<span>
							Информация на сайте не является публичной офертой и
							носит
						</span>
						<span>исключительно информационный характер</span>
						<span>Разработка R-top</span>
					</div>
				</div>
				<div className={style.right}>
					<ListLink />
					<ListLink />
					<ListLink />
				</div>
			</div>
		</footer>
	);
};
