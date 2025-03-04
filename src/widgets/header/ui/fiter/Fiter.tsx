import React from "react";
import debounce from "lodash.debounce";
import loopIcon from "../../../../shared/assets/icon/icon_normal_search.svg";
import trolley from "../../../../shared/assets/icon/icon_normal_trolley.svg";
import favorite from "../../../../shared/assets/icon/icon_normal_fav.svg";
import { useNavigate } from "react-router-dom";
import style from "./filter.module.scss";

export const Fiter: React.FC = (): React.JSX.Element => {
	const ref = React.useRef<HTMLInputElement>(null);
	const navigateFilter = useNavigate();

	const [searchValue, setSearchValue] = React.useState("");

	const updateSearch = React.useCallback(
		debounce((value) => {
			setSearchValue(value);
		}, 700),
		[]
	);

	const onHandleChange = (e: React.ChangeEvent) => {
		if (e.target instanceof HTMLInputElement) {
			const value = e.target.value;
			updateSearch(value);
		}
	};

	const imgProps = searchValue
		? {
				src: require("../../../../shared/assets/icon/icons8-close-32.png"),
				onClick: () => {
					if (ref.current?.value) {
						ref.current.value = "";
						setSearchValue("");
					}
				},
				alt: "close",
		  }
		: {
				src: loopIcon,
				alt: "loop",
		  };

	return (
		<div className={style.filter}>
			<div className={style.headerFilter}>
				<label htmlFor="headerFilter">
					<input
						type="text"
						ref={ref}
						id="headerFilter"
						onChange={(e: React.ChangeEvent) => {
							onHandleChange(e);
							navigateFilter("/catalog");
						}}
					/>
					<img {...imgProps} />
				</label>
			</div>
			<img
				src={trolley}
				alt="trolley"
				onClick={() => navigateFilter("/favorite")}
			/>
			<img
				src={favorite}
				alt="favorite"
				onClick={() => navigateFilter("/favorite")}
			/>
		</div>
	);
};
