import React from 'react';
import style from './zero.module.scss';

export const Zero: React.FC<{result?: string}> = ({result}): React.JSX.Element => {
  return (
		<div className={style.zero}>
			<div className={style.container}>
				<h1>{result || "Нет в наличии"}</h1>
				<img
					src={require("../../assets/icon/sad.png")}
					alt="sad-image"
				/>
			</div>
		</div>
  );
}
