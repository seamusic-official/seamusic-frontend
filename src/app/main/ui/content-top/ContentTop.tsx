import { ContentTopLeft } from '../content-top-left/ContentTopLeft';
import { ContentTopRight } from '../content-top-right/ContentTopRight';
import styles from './ContentTop.module.scss';

export function ContentTop() {
  return (
    <div className={styles.contentTop}>
      <ContentTopLeft />
      <ContentTopRight />
    </div>
  )
}
