import React from 'react';
import style from './pending.module.scss';
import { Skeleton } from '../skeleton/Skeleton';

export const Pending: React.FC = (): React.JSX.Element => {
  return (
		<div className={style.pending}>
			<div className={style.container}>
				<h2 className={style.title}>Идет загрузка</h2>
				<div className={style.content}>
					{Array.from({ length: 12 }, (_, i) => i).map((_, index) => {
						return <Skeleton key={index} />;
					})}
				</div>
			</div>
		</div>
  );
}
