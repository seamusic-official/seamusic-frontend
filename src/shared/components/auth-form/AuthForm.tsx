import Link from 'next/link';
import styles from './AuthForm.module.scss';
import { TEXT_AUTH } from '@/constants/constants';
import { Divider } from '@/shared/ui';

export function AuthForm() {
	return (
      <form className={styles.form}>
        <div className={styles.formTitle}>
          <div className={styles.titleLeft}>{TEXT_AUTH.form_sign_in}</div>
          <div className={styles.titleRight}>{TEXT_AUTH.form_text_logo}</div>
        </div>
        <div className={styles.loginBlock}>
          <input
            className={styles.formInput}
            type="text"
            placeholder={TEXT_AUTH.form_google}
          />
          <input
            className={styles.formInput}
            type="text"
            placeholder={TEXT_AUTH.form_spotify}
          />
        </div>
        <Divider />
        <div className={styles.loginBlock}>
          <div className={styles.loginInput}>
            <div className={styles.inputHeader}>{TEXT_AUTH.form_email}</div>
            <input
              className={styles.formInput}
              type="text"
              placeholder=''
            />
          </div>
          <div className={styles.loginInput}>
            <div className={styles.inputHeader}>{TEXT_AUTH.form_password}</div>
            <input
              className={styles.formInput}
              type="text"
              placeholder=''
            />
            <div className={styles.inputFooter}>
                <Link href="/">
                  {TEXT_AUTH.form_forget}
                </Link>
              </div>
          </div>
        </div>
        <Link href="/">
          <button className={styles.btnAuth} role='presentation'>
            {TEXT_AUTH.form_sign_in}
          </button>
        </Link>
        <div className={styles.signUpLine}>
          <div>{TEXT_AUTH.form_registration}</div>
          <Link href="/">{TEXT_AUTH.form_sign_up}</Link>
        </div>
      </form>
	)
}
