import s from './FormTitle.module.scss';

export type FormTitleType = {
  left: string;
  right: string;
};

type FormTitleProps = {
  data: FormTitleType,
}

export function FormTitle({ data }: FormTitleProps) {
  return (
    <div className={s.formTitle}>
      <div className={s.titleLeft}>{data.left}</div>
      <div className={s.titleRight}>{data.right}</div>
    </div>
  )
}
