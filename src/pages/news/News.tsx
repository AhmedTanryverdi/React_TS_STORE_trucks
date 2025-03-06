import React from "react";
import style from "./news.module.scss";
import { CardNews } from "../../entities/index";
import { RootState, useAppDispatch } from "../../app/redux/store";
import { useSelector } from "react-redux";
import { NewType } from "../../shared/types";
import { getNews } from "../../entities/index";
import { Link } from "react-router-dom";
import { Error } from "../../shared/components/error/Error";
import { error } from "console";
import { Skeleton } from "../../shared/components/skeleton/Skeleton";

export const News: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const news = useSelector<RootState, NewType[]>((state) => state.news.news);

	const status = useSelector<RootState, string>((state) => state.news.status);
	const error = useSelector<RootState, number>((state) => state.news.error);

	React.useEffect(() => {
		dispatch(getNews("http://localhost:8000/news"));
	}, []);

	console.log("[status]: ", status);

	if (status === "pending") {
		return (
			<div className={style.pending}>
				<div className={style.container}>
					<h2 className={style.title}>Идет загрузка</h2>
					<div className={style.content}>
						{Array.from({ length: 12 }, (_, i) => i).map(
							(_, index) => {
								return <Skeleton key={index} />;
							}
						)}
					</div>
				</div>
			</div>
		);
	} else if (status === "rejected") {
		return (
			<div className={style.error}>
				<Error error={error} />
			</div>
		);
	}

	return (
		<div className={style.news}>
			<div className={style.container}>
				<h2 className={style.title}>Новости</h2>
				<div className={style.newItem}>
					<p className={style.newData}>{news[0]?.data}</p>
					<h3 className={style.newTitle}>{news[0]?.titleNews}</h3>
					<div className={style?.newText}>
						<p>
							В целом, конечно, глубокий уровень погружения не
							оставляет шанса для новых принципов формирования
							материально-технической и кадровой базы. В своём
							стремлении повысить качество жизни, они забывают,
							что глубокий уровень погружения играет важную роль в
							формировании анализа существующих паттернов
							поведения!
						</p>

						<Link to={`/news/${news[0]?.id}`}>
							Подробнее &rarr;
						</Link>
					</div>
				</div>
				<div className={style.newCards}>
					{news?.slice(1).map((item, index) => {
						return <CardNews key={index} {...item} />;
					})}
				</div>
			</div>
		</div>
	);
};
