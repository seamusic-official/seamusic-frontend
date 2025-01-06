import Image from 'next/image';
import styles from './TopImage.module.scss';
import { ImgData } from '@/constants/constants';

export function TopImage({ props }: { props: ImgData }) {
  return (
    <div className={styles.topImage}>
      <Image
          src={props.image}
          alt=""
          role="presentation"
					className={styles.image}
        />
        <div className={styles.topImageTextWrapper}>
          <div className={styles.topImageText}>{props.value}</div>
        </div>
        <div className={styles.arrowTop} />
    </div>
  )
}
