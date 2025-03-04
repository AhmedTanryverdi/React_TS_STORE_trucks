import React from 'react';
import style from './drawing.module.scss';

const images = [
	require("../../../../shared/assets/images/drawing1.png"),
	require("../../../../shared/assets/images/drawing2.png"),
];

export const Drawing: React.FC = (): React.JSX.Element => {

    const [currentImage, setCurrentImage] = React.useState(0);
  return (
		<section className={style.drawing}>
			<div className={style.container}>
				<div className={style.content}>
					<img src={images[currentImage]} alt="drawing" />
					<div className={style.items}>
						{images.map((item, index) => {
							return (
								<img
									key={index}
									src={item}
									alt="drawing"
									onClick={() => setCurrentImage(index)}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
  );
}
