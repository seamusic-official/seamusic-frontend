import { AuthLeftBlock, LoginForm } from '@/widgets';
import s from './Login.module.scss';

export function Login() {
	return (
    <div className={s.auth}>
		  <AuthLeftBlock />
      <LoginForm />
    </div>
	)
}
