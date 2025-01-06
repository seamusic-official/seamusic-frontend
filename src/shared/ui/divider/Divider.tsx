import Link from 'next/link';
import s from './Divider.module.scss';
import { TEXT_AUTH } from '@/constants/constants';

export function Divider() {
	return (
        <div className={s.formDivider}>
          <div className={s.formLine}></div>
          <div className={s.dividerText}>{TEXT_AUTH.form_divider}</div>
          <div className={s.formLine}></div>
        </div>
  );
}
