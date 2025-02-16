import { AuthLeftBlock, RegisterForm } from '@/widgets';
import s from './Register.module.scss';

export const Register = () => {
	return (
		<div className={s.auth}>
			<AuthLeftBlock />
			<RegisterForm />
		</div>
	);
};
