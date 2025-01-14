import { AuthLeftBlock } from '@/shared/components';
import s from './Login.module.scss';
import { LoginForm } from '@/shared/components/login-form/LoginForm';

export function Login() {
	return (
    <div className={s.auth}>
		  <AuthLeftBlock />
      <LoginForm />
    </div>
	)
}
