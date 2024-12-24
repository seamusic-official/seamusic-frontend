import { Auth } from '@/pages/auth/Auth';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Auth'
}

export default function Page() {
	return <Auth />
}