import { ContentTopLeft } from '../content-top-left/ContentTopLeft';
import { ContentTopRight } from '../content-top-right/ContentTopRight';
import s from './ContentTop.module.scss';

export function ContentTop() {
  return (
    <div className={s.contentTop}>
      <ContentTopLeft />
      <ContentTopRight />
    </div>
  )
}
