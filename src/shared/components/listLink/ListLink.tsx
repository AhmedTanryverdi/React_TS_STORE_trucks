import React from 'react';
import style from './listlink.module.scss';

export const ListLink: React.FC = (): React.JSX.Element => {
  return (
		<ul className={style.listLink}>
			<li>Категории</li>
			<li>Каталог</li>
			<li>Избранное</li>
			<li>О компании</li>
			<li>Вакансии</li>
		</ul>
  );
}
