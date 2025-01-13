import { Login } from '@/pages/login/Login';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Login'
}

export default function Page() {
	return <Login />
}