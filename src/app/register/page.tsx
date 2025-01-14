import { Register } from '@/pages/register/Register';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Login'
}

export default function Page() {
	return <Register />
}