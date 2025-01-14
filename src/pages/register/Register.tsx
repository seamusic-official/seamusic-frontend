import { AuthLeftBlock } from '@/shared/components';
import s from './Register.module.scss';
import { RegisterForm } from '@/shared/components/register-form/RegisterForm';

export function Register() {
	return (
    <div className={s.auth}>
		  <AuthLeftBlock />
      <RegisterForm />
    </div>
	)
}
