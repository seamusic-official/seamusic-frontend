import s from './AuthLeftBlock.module.scss';
import Image from 'next/image';
import imgTopLeftSrc from '@/shared/assets/auth/ContentStadium.png';
import imgTopRighttSrc from '@/shared/assets/auth/ContentBiilie.png';
import imgBottomLefTopSrc from '@/shared/assets/auth/ContentGirl.png';
import imgBottomLefBottomSrc from '@/shared/assets/auth/Logo.png';
import imgBottomRightBottomSrc from '@/shared/assets/auth/ContentGlassEffect.png';

export const AuthLeftBlock = () => {
	return (
		<div className={s.block}>
			<div className={s.top}>
				<Image
					src={imgTopLeftSrc}
					alt=""
					role="presentation"
					className={s.imgTopLeft}
				/>
				<Image
					src={imgTopRighttSrc}
					alt=""
					role="presentation"
					className={s.imgTopRight}
				/>
			</div>
			<div className={s.center}>Self-expression for everyone</div>
			<div className={s.bottom}>
				<div className={s.bottomLeft}>
					<Image
						src={imgBottomLefTopSrc}
						alt=""
						role="presentation"
						className={s.imgBottomLefTop}
					/>
					<Image
						src={imgBottomLefBottomSrc}
						alt=""
						role="presentation"
						className={s.imgBottomLefBottom}
					/>
				</div>
				<div className={s.bottomRight}>
					<Image
						src={imgBottomRightBottomSrc}
						alt=""
						role="presentation"
						className={s.imgBottomRightBottom}
					/>
				</div>
			</div>
		</div>
	);
};
