import s from './Tag.module.scss';

type TagProps = {
  id: string,
  value: string
}

export function Tag({ props }: { props: TagProps }) {
  return (
    <div className={s.tag}>{`#${props.value}`}</div>
  )
}
