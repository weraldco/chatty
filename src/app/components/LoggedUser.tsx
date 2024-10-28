import { auth } from '@/auth';
import React from 'react';
import LogoutButton from './LogoutButton';

export default async function LoggedUser() {
	const session = await auth();
	return (
		<div className="flex flex-1 flex-row gap-4 items-center text-sm">
			<div>{session?.user?.email}</div>
			<LogoutButton />
		</div>
	);
}
