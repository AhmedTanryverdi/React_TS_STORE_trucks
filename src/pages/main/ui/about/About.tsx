import React from 'react';
import style from './about.module.scss';

export const About: React.FC = (): React.JSX.Element => {
  return (
		<section className={style.about}>
			<div className={style.container}>
				<div className={style.row}>
					<div className={style.col}>
						<h2>
							5<span>лет</span>
						</h2>
						<p>
							За 5 лет своей деятельности ООО «РусТрак»
							превратилось в крупное предприятие по производству и
							продаже специальной техники
						</p>
					</div>
					<div className={style.col}>
						<h2>
							95
							<span>субъектов</span>
						</h2>
						<p>
							Мы обеспечили 95 субъектов РФ надежной техникой
							коммерческого и специализированного предназначения
						</p>
					</div>
					<div className={style.col}>
						<h2>
							10
							<span>концернов</span>
						</h2>
						<p>
							ООО «РусТрак» дорожит доверием автопрома, которое
							подтверждено дилерскими полномочиями от 10
							лидирующих концернов
						</p>
					</div>
				</div>
			</div>
		</section>
  );
}
