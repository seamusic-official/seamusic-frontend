import Link from 'next/link';
import s from './LoginForm.module.scss';
import { Divider, FormTitle } from '@/shared/ui';

export function LoginForm() {
	return (
      <form className={s.form}>
        <FormTitle data={{left: 'Sign in', right: 'SeaMusic'}} />
        <div className={s.loginBlock}>
          <input
            className={s.formInput}
            type="text"
            placeholder={'Continue with Google'}
          />
          <input
            className={s.formInput}
            type="text"
            placeholder={'Continue with Spotify'}
          />
        </div>
        <Divider text={'OR'} />
        <div className={s.loginBlock}>
          <div className={s.loginInput}>
            <div className={s.inputHeader}>{'Email adress'}</div>
            <input
              className={s.formInput}
              type="text"
              placeholder=''
            />
          </div>
          <div className={s.loginInput}>
            <div className={s.inputHeader}>{'Password'}</div>
            <input
              className={s.formInput}
              type="text"
              placeholder=''
            />
            <div className={s.inputFooter}>
                <Link href="/">
                  {'Forget your password'}
                </Link>
              </div>
          </div>
        </div>
        <Link href="/">
          <button className={s.btnAuth} role='presentation'>
            {'Sign in'}
          </button>
        </Link>
        <div className={s.signUpLine}>
          <div>{'Don’t have an account?'}</div>
          <Link href="/register" className={s.linkUnderline}>{'Sign up'}</Link>
        </div>
      </form>
	)
}
