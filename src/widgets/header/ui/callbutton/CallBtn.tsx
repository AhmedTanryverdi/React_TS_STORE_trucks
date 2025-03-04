import React from "react";
import style from "./callbtn.module.scss";
import handset from "../../../../shared/assets/icon/handset.svg";

export const CallBtn: React.FC = (): React.JSX.Element => {
	return (
		<button className={style.callbtn}>
			<img src={handset} className={style.handset} alt="handset" />
		</button>
	);
};
