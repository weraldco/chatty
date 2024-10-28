import LoginForm from '@/app/components/LoginForm';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
	const session = await auth();
	if (session?.user) redirect('/dashboard');
	return <LoginForm />;
}
