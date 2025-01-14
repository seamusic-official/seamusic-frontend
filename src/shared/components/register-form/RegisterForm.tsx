import Link from 'next/link';
import s from './RegisterForm.module.scss';
import { TEXT_AUTH } from '@/constants/constants';
import { Divider } from '@/shared/ui';

export function RegisterForm() {
	return (
      <form className={s.form}>
        <div className={s.formTitle}>
          <div className={s.titleLeft}>{TEXT_AUTH.form_signUp}</div>
          <div className={s.titleRight}>{TEXT_AUTH.form_textLogo}</div>
        </div>
        <div className={s.registerBlock}>
          <div className={s.loginInput}>
            <div className={s.inputHeader}>{TEXT_AUTH.form_userName}</div>
            <input
              className={s.formInput}
              type="text"
            />
          </div>
          <div className={s.loginInput}>
            <div className={s.inputHeader}>{TEXT_AUTH.form_email}</div>
            <input
              className={s.formInput}
              type="text"
            />
          </div>
          <div className={s.loginInput}>
            <div className={s.inputHeader}>{TEXT_AUTH.form_password}</div>
            <input
              className={s.formInput}
              type="password"
            />
            <div className={s.inputFooter}>{TEXT_AUTH.form_passwordTips}</div>
          </div>
          <div className={s.loginInput}>
            <div className={s.inputHeader}>{TEXT_AUTH.form_passwordConfirm}</div>
            <input
              className={s.formInput}
              type="password"
            />
          </div>
        </div>
        <div className={s.nextStep}>
          <div className={s.nextBtn}>
            <div className={s.left}>{TEXT_AUTH.form_lastStep}</div>
            <svg width="15" height="28" viewBox="0 0 15 28"
              fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L13.9293 13.9293C13.9683 13.9683 13.9683 14.0317 13.9293 14.0707L1 27"
                stroke="white" stroke-width="3" stroke-linecap="round"
              />
            </svg>
          </div>
          <div className={s.signUpLine}>
            <div>{TEXT_AUTH.form_login}</div>
            <Link href="/login" className={s.linkUnderline}>{TEXT_AUTH.form_signIn}</Link>
        </div>
        </div>
      </form>
	)
}
