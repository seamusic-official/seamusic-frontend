import s from './ContentTitle.module.scss';

type Props = {
	left: string;
	right: string;
};

export const ContentTitle = ({ left, right }: Props) => {
	return (
		<div className={s.title}>
			<div className={s.left}>{left}</div>
			<div className={s.right}>{right}</div>
		</div>
	);
};
