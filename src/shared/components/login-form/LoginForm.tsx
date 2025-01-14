import Link from 'next/link';
import s from './LoginForm.module.scss';
import { AUTH_FORM_TITLE, TEXT_AUTH } from '@/constants/constants';
import { Divider, FormTitle } from '@/shared/ui';

export function LoginForm() {
	return (
      <form className={s.form}>
        <FormTitle data={AUTH_FORM_TITLE.loginFormData} />
        <div className={s.loginBlock}>
          <input
            className={s.formInput}
            type="text"
            placeholder={TEXT_AUTH.form_google}
          />
          <input
            className={s.formInput}
            type="text"
            placeholder={TEXT_AUTH.form_spotify}
          />
        </div>
        <Divider />
        <div className={s.loginBlock}>
          <div className={s.loginInput}>
            <div className={s.inputHeader}>{TEXT_AUTH.form_email}</div>
            <input
              className={s.formInput}
              type="text"
              placeholder=''
            />
          </div>
          <div className={s.loginInput}>
            <div className={s.inputHeader}>{TEXT_AUTH.form_password}</div>
            <input
              className={s.formInput}
              type="text"
              placeholder=''
            />
            <div className={s.inputFooter}>
                <Link href="/">
                  {TEXT_AUTH.form_forget}
                </Link>
              </div>
          </div>
        </div>
        <Link href="/">
          <button className={s.btnAuth} role='presentation'>
            {TEXT_AUTH.form_signIn}
          </button>
        </Link>
        <div className={s.signUpLine}>
          <div>{TEXT_AUTH.form_registration}</div>
          <Link href="/register" className={s.linkUnderline}>{TEXT_AUTH.form_signUp}</Link>
        </div>
      </form>
	)
}
