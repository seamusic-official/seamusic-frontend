import s from './BtnBack.module.scss';

export const BtnBack = () => {
	return (
		<div className={s.wrapper}>
			<svg
				width="15"
				height="28"
				viewBox="0 0 15 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M14 27L1.07071 14.0707C1.03166 14.0317 1.03166 13.9683 1.07071 13.9293L14 1"
					stroke="white"
					strokeWidth="3"
					strokeLinecap="round"
				/>
			</svg>
			<div className={s.text}>Back</div>
		</div>
	);
};
