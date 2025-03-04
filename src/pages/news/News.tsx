import React from "react";
import style from "./news.module.scss";
import { CardNews } from "../../entities/index";
import { RootState, useAppDispatch } from "../../app/redux/store";
import { useSelector } from "react-redux";
import { NewType } from "../../shared/types";
import { getNews } from "../../entities/index";
import { Link } from "react-router-dom";

export const News: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const news = useSelector<RootState, NewType[]>((state) => state.news.news);

	React.useEffect(() => {
		dispatch(getNews("http://localhost:8000/news"));
	}, []);

	if (!news.length) {
		return <h1>Загрузка...</h1>;
	}

	return (
		<div className={style.news}>
			<div className={style.container}>
				<h2 className={style.title}>Новости</h2>
				<div className={style.newItem}>
					<p className={style.newData}>{news[0].data}</p>
					<h3 className={style.newTitle}>{news[0].titleNews}</h3>
					<div className={style.newText}>
						<p>
							В целом, конечно, глубокий уровень погружения не
							оставляет шанса для новых принципов формирования
							материально-технической и кадровой базы. В своём
							стремлении повысить качество жизни, они забывают,
							что глубокий уровень погружения играет важную роль в
							формировании анализа существующих паттернов
							поведения!
						</p>

						<Link to={`/news/${news[0].id}`}>
							Подробнее &rarr;
						</Link>
					</div>
				</div>
				<div className={style.newCards}>
					{news.slice(1).map((item, index) => {
						return <CardNews key={index} {...item} />;
					})}
				</div>
			</div>
		</div>
	);
};
