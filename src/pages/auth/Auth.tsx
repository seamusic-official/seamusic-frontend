import { AuthForm, AuthLeftBlock } from '@/shared/components';
import s from './Auth.module.scss';

export function Auth() {
	return (
    <div className={s.auth}>
		  <AuthLeftBlock />
      <AuthForm />
    </div>
	)
}
