import type { MainButtonProps } from '../type';
import styles from './arrow-button.module.scss';
import ArrowBack from '@/shared/assets/icons/arrow_back-ios.svg';

export const ArrowBtn = ({ variant, ...props }: MainButtonProps) => {
	const getClassnameForType = (
		buttonType: 'text' | 'secondary' | 'primary'
	) => {
		switch (buttonType) {
			case 'primary':
				return styles.buttonPrimary;
			case 'secondary':
				return styles.buttonSecondary;
			case 'text':
				return styles.buttonText;
			default:
				return '';
		}
	};

	return (
		<button className={`${getClassnameForType(variant)}`} {...props}>
			<div className={styles.buttonContainer}>
				<ArrowBack width="12px" height="20px" />
			</div>
		</button>
	);
};
