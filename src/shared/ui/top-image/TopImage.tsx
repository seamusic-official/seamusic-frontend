import Image, { StaticImageData } from 'next/image';
import s from './TopImage.module.scss';

type ImgData = {
  id: string;
  value: string;
  image: StaticImageData;
};

export function TopImage({ props }: { props: ImgData }) {
  return (
    <div className={s.topImage}>
      <Image
          src={props.image}
          alt=""
          role="presentation"
					className={s.image}
        />
        <div className={s.topImageTextWrapper}>
          <div className={s.topImageText}>{props.value}</div>
        </div>
        <div className={s.arrowTop} />
    </div>
  )
}
