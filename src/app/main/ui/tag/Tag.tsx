'use client'

import { IdValue } from '@/shared/types/types';
import styles from './Tag.module.scss';

export function Tag({ props }: { props: IdValue }) {
  console.log('value: ', props.value);
  return (
    <div className={styles.tag}>{`#${props.value}`}</div>
  )
}
