import styles from './Auth.module.scss';
import { AuthForm } from './ui/auth-form/AuthForm';
import { AuthLeftBlock } from './ui/auth-left-block/AuthLeftBlock';

export function Auth() {
	return (
    <div className={styles.auth}>
		  <AuthLeftBlock />
      <AuthForm />
    </div>
	)
}
