import { AuthLeftBlock, RegisterForm } from '@/widgets';
import s from './Register.module.scss';

export function Register() {
	return (
    <div className={s.auth}>
		  <AuthLeftBlock />
      <RegisterForm />
    </div>
	)
}
