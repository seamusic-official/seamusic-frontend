import s from './PreferItem.module.scss';

type PreferItemProps = {
  name: string;
};

export function PreferItem({ name }: PreferItemProps) {
	return (
    <div className={s.preferItem}>
      {name}
    </div>
  )
}
