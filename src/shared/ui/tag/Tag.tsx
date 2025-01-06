import styles from './Tag.module.scss';

export type IdValue = {
  id: string,
  value: string
}

export function Tag({ props }: { props: IdValue }) {
  return (
    <div className={styles.tag}>{`#${props.value}`}</div>
  )
}
