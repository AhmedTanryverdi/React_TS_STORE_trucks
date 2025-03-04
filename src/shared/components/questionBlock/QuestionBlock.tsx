import React from "react";
import style from "./questionBlock.module.scss";

type FormType = {
	data: {
		name: string;
		phone: string;
	};
	success: boolean;
	error: boolean;
};

const userInfo: FormType = {
	data: {
		name: "",
		phone: "",
	},
	success: false,
	error: false,
};

export const QuestionBlock: React.FC = (): React.JSX.Element => {
	const [state, formAction] = React.useActionState(
		async (currentState: any, formData: any): Promise<FormType> => {
			const data = {
				name: formData.get("name"),
				phone: formData.get("phone"),
			};

			try {
				const response = await fetch(
					"http://localhost:8000/questions",
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(data),
					}
				);

				if (!response.ok) {
					throw new Error("request error!");
				}

				return {
					data,
					success: true,
					error: false,
				};
			} catch (error: any) {
				return {
					...currentState,
					error: true,
				};
			}
		},
		userInfo
	);

	return (
		<div className={style.questionBlock}>
			<div className={style.container}>
				<div className={style.left}>
					<h2 className={style.title}>
						<span>ОСТАЛИСЬ ВОПРОСЫ?</span>
						<span>
							Оставьте свои контактные данные, и мы презвоним вам
							в ближайшее время
						</span>
					</h2>

					<form action={formAction} className={style.form}>
						<label htmlFor="name">
							<p>Имя</p>
							<input
								type="text"
								id="name"
								name="name"
								className={style.input}
							/>
						</label>

						<label htmlFor="phone">
							<p> Телефон </p>
							<input
								type="text"
								id="phone"
								name="phone"
								className={style.input}
							/>
						</label>

						<input type="submit" className={style.btn} />
					</form>

					<span style={{ color: "red" }}>
						{state.success &&
							"Спасибо за обращение. Мы с Вами свяжемся в ближайшее время."}
					</span>
					<p>
						Нажимая на кнопку отправить Вы соглашаетесь на обработку
						Ваших персональных данных компание ООО «Рустрак»
					</p>
				</div>
				<img
					src={require("../../../shared/assets/images/truck-img.png")}
					alt="truck-image"
				/>
			</div>
		</div>
	);
};
