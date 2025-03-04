import React from "react";
import style from "./employeeCard.module.scss";
import { EmployeeType } from "../../../shared/types";

export const EmployeeCard: React.FC<EmployeeType> = (
	props: EmployeeType
): React.JSX.Element => {
	const { firstName, secondName, post, numbers, email, image } = props;

	return (
		<div className={style.employeeCard}>
			<div className={style.container}>
				<div className={style.row}>
					<div className={style.colPerson}>
						<img
							src={require(`../../../shared/assets/images/employees/${image}`)}
							alt="employee-image"
						/>
						<p
							className={style.fullname}
						>{`${firstName} ${secondName}`}</p>
						<p>{post}</p>
					</div>
					<div className={style.colNumbers}>
						<p>{numbers[0]}</p>
						<p>{numbers[1]}</p>
						<p>{email}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
