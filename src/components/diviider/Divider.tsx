import Link from 'next/link';
import styles from './Divider.module.scss';
import { TEXT_AUTH } from '@/constants/constants';

export function Divider() {
	return (
        <div className={styles.formDivider}>
          <div className={styles.formLine}></div>
          <div className={styles.dividerText}>{TEXT_AUTH.form_divider}</div>
          <div className={styles.formLine}></div>
        </div>
  );
}
