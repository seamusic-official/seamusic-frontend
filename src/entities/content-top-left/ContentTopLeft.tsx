import { CONTENT_TOP_LEFT_IMAGES, TAGS } from '@/shared/constants';
import s from './ContentTopLeft.module.scss';
import { Tag, TopImage } from '@/shared/ui';

export function ContentTopLeft() {
  return (
    <div className={s.contentTopLeft}>
      <div className={s.blockText}>
        <div className={s.blockTitle}>
          <div className={s.title}>Find inspiration</div>
          <div className={s.desription}>Today’s theme</div>
        </div>
      <div className={s.blockTags}>
        {TAGS.contentTopLeftTags.map((el) => (
          <Tag key={el.id} props={el} />
        ))}
      </div>
      </div>
      <div className={s.blockImages}>
        {CONTENT_TOP_LEFT_IMAGES.map((el) => (
          <TopImage key={el.id} props={el.data} />
        ))}
      </div>
    </div>
  )
}
