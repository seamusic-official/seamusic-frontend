import { AuthForm, AuthLeftBlock } from '@/shared/components';
import styles from './Auth.module.scss';

export function Auth() {
	return (
    <div className={styles.auth}>
		  <AuthLeftBlock />
      <AuthForm />
    </div>
	)
}
