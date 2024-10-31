import { getOnlineUsers } from '@/actions/auth';
import { auth } from '@/auth';
import { on } from 'events';
import { redirect } from 'next/navigation';
import React, { use } from 'react';
import ChatHistory from '../components/ChatHistory';
import Header from '../components/Header';
import Messages from '../components/Messages';

export default async function DashboardPage() {
	const session = await auth();
	if (!session?.user) redirect('/');
	const header = <Header />;
	const users = await getOnlineUsers();

	const onlineUsers = users?.filter((u) => u.email !== session.user?.email);

	return (
		<div>
			{header}
			<div className="grid h-screen">
				<div className="grid grid-cols-3 justify-center items-center ">
					<ChatHistory online={onlineUsers} />
					<Messages />
				</div>
			</div>
		</div>
	);
}
