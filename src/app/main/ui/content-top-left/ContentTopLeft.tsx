'use client'

import { CONTENT_TOP_LEFT_IMAGES, TAGS } from '@/constants/constants';
import styles from './ContentTopLeft.module.scss';
import { Tag } from '../tag/Tag';
import { TopImage } from '../top-image/TopImage';

export function ContentTopLeft() {
  return (
    <div className={styles.contentTopLeft}>
      <div className={styles.blockText}>
        <div className={styles.blockTitle}>
          <div className={styles.title}>Find inspiration</div>
          <div className={styles.desription}>Today’s theme</div>
        </div>
      <div className={styles.blockTags}>
        {TAGS.contentTopLeftTags.map((el) => (
          <Tag key={el.id} props={el} />
        ))}
      </div>
      </div>
      <div className={styles.blockImages}>
        {CONTENT_TOP_LEFT_IMAGES.map((el) => (
          <TopImage key={el.id} props={el.data} />
        ))}
      </div>
    </div>
  )
}
