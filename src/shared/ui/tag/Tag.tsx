import s from './Tag.module.scss';

type TagProps = {
	id: string;
	value: string;
};

export const Tag = ({ value }: TagProps) => {
	return <div className={s.tag}>{`#${value}`}</div>;
};
