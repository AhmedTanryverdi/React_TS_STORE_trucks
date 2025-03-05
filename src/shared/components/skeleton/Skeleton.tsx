import React from "react";
import style from "./skeleton.module.scss";

export const Skeleton: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.skeleton}>
    
			<div className={style.block}>
				<div className={style.imgPlace}></div>
				<div className={style.titlePlace}></div>
				<div className={style.pricePlace}></div>
				<div className={style.btnPlace}></div>
			</div>
		</div>
	);
};
