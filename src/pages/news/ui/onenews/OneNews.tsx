import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../../app/redux/store";
import { useSelector } from "react-redux";
import { getNews } from "../../../../entities/index";
import { NewType } from "../../../../shared/types";
import { AnotherNewsCard } from "./ui/AnotherNewsCard";
import style from "./onenews.module.scss";

export const OneNews: React.FC = (): React.JSX.Element => {
	const { id } = useParams();
	const navigate = useNavigate();

	const dispatch = useAppDispatch();
	const oneNews = useSelector<RootState, NewType[]>(
		(state) => state.news.news
	);

	const [anotherNews, setAnotherNews] = React.useState<NewType[]>([]);

	React.useEffect(() => {
		dispatch(getNews(`http://localhost:8000/news/?id=${id}`));

		fetch("http://localhost:8000/news?_limit=4")
			.then((response) => response.json())
			.then((data) => setAnotherNews(data));
	}, [id]);

	if (!oneNews.length) {
		return <h2>Загрузка...</h2>;
	}

	const { titleNews, description, data, image } = oneNews[0];

	return (
		<div className={style.onenews}>
			<div className={style.container}>
				<button
					type="button"
					className={style.goBackBtn}
					onClick={() => navigate(-1)}
				>
					&#8592; назад
				</button>
				<h2 className={style.oneNewsTitle}>
					<span>{titleNews}</span>
					<span>{data}</span>
				</h2>
				<div className={style.oneNewsBody}>
					<div className={style.innerbody}>
						<p>{description}</p>
					</div>
					<div className={style.img}>
						<img
							src={require(`../../../../shared/assets/images/trucks/${image}`)}
							alt="truck-image"
						/>
					</div>
				</div>

				<div className={style.anotherNews}>
					<h3>Ещё новости</h3>
					<div className={style.items}>
						{anotherNews.map((item, index) => {
							return <AnotherNewsCard key={index} {...item} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
