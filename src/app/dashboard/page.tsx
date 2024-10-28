import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import ChatHistory from '../components/ChatHistory';
import Header from '../components/Header';
import Messages from '../components/Messages';

export default async function DashboardPage() {
	const session = await auth();
	if (!session?.user) redirect('/');
	const header = <Header />;
	return (
		<div>
			{header}
			<div className="grid h-screen">
				<div className="grid grid-cols-3 justify-center items-center ">
					<ChatHistory />
					<Messages />
				</div>
			</div>
		</div>
	);
}
