'use client'

import styles from './AuthLeftBlock.module.scss';
import Image from 'next/image';
import imgTopLeftSrc from '@/shared/assets/auth/ContentStadium.png';
import imgTopRighttSrc from '@/shared/assets/auth/ContentBiilie.png';
import imgBottomLefTopSrc from '@/shared/assets/auth/ContentGirl.png';
import imgBottomLefBottomSrc from '@/shared/assets/auth/Logo.png';
import imgBottomRightBottomSrc from '@/shared/assets/auth/ContentGlassEffect.png';
import { TEXT_AUTH } from '@/constants/constants';

export function AuthLeftBlock() {
	return (
		<div className={styles.block}>
      <div className={styles.top}>
			  <Image
          src={imgTopLeftSrc}
          alt=""
          role="presentation"
					className={styles.imgTopLeft}
        />
			  <Image
          src={imgTopRighttSrc}
          alt=""
          role="presentation"
					className={styles.imgTopRight}
        />
			</div>
      <div className={styles.center}>{TEXT_AUTH.left_title}</div>
      <div className={styles.bottom}>
				<div className={styles.bottomLeft}>
				  <Image
            src={imgBottomLefTopSrc}
            alt=""
            role="presentation"
				  	className={styles.imgBottomLefTop}
          />
				  <Image
            src={imgBottomLefBottomSrc}
            alt=""
            role="presentation"
				  	className={styles.imgBottomLefBottom}
          />
				</div>
				<div className={styles.bottomRight}>
				  <Image
            src={imgBottomRightBottomSrc}
            alt=""
            role="presentation"
				  	className={styles.imgBottomRightBottom}
          />
				</div>
			</div>
		</div>
	)
}
