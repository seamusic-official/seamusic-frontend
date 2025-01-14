import { ContentTopLeft, ContentTopRight } from '@/entities';
import s from './ContentTop.module.scss';

export function ContentTop() {
  return (
    <div className={s.contentTop}>
      <ContentTopLeft />
      <ContentTopRight />
    </div>
  )
}
