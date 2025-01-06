import s from './Tag.module.scss';

export type IdValue = {
  id: string,
  value: string
}

export function Tag({ props }: { props: IdValue }) {
  return (
    <div className={s.tag}>{`#${props.value}`}</div>
  )
}
