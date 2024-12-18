import type { Metadata } from 'next';
import { Main } from './Main';

export const metadata: Metadata = {
	title: 'Main'
}

export default function MainPage() {
	return <Main />
}
