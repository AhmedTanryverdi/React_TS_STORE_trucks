import React from "react";
import arrowLeft from "../../../../shared/assets/icon/arrows/arrowLeft.svg";
import arrowRight from "../../../../shared/assets/icon/arrows/arrowRight.svg";
import style from "./slider.module.scss";

export const Slider: React.FC = (): React.JSX.Element => {
	const [currentImage, setCurrentImage] = React.useState<number>(1);

	const nextImage = () => {
		if (currentImage === 3) {
			setCurrentImage(1);
		} else {
			setCurrentImage(currentImage + 1);
		}
	};

	const prevImage = () => {
		if (currentImage === 1) {
			setCurrentImage(3);
		} else {
			setCurrentImage(currentImage - 1);
		}
	};

	React.useEffect(() => {
		const intervalID = setInterval(nextImage, 2500);

		return () => clearInterval(intervalID);
	}, [currentImage]);

	return (
		<section className={style.slider}>
			<div className={style.container}>
				<div className={style.row}>
					<img
						src={arrowLeft}
						className={style.arrow1}
						onClick={prevImage}
						alt="arrow"
					/>
					<img
						src={arrowRight}
						className={style.arrow2}
						onClick={nextImage}
						alt="arrow"
					/>
					<div className={style.imageBlock}>
						<img
							src={require(`../../assets/images/image-${currentImage}.png`)}
							alt="image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
