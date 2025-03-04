import React from "react";
import style from "./pagination.module.scss";

export const Pagination: React.FC<{
	count: number;
	countElmentsPage: number;
	start: number;
	setStart: (countElmentsPagenumber: number) => void;
}> = ({ countElmentsPage, count, start, setStart }): React.JSX.Element => {
	const pages = Array.from({ length: count }, (_, i) => i + 1);
	return (
		<div className={style.pagination}>
			<div className={style.items}>
				<span>&lt;</span>
				<ul>
					{pages.map((item, index) => {
						return (
							<li
								key={index}
								onClick={() => {
									const newStart =
										start * index +
										countElmentsPage -
										start;
									setStart(newStart < 0 ? 0 : newStart);
								}}
							>
								<button type="button">{item}</button>
							</li>
						);
					})}
				</ul>
				<span> &gt;</span>
			</div>
		</div>
	);
};
