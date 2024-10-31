import { logout } from '@/actions/auth';
import { auth } from '@/auth';
import React from 'react';

export default async function LoggedUser() {
	const session = await auth();
	const handleSubmit = logout.bind(null, session?.user?.email as string);
	return (
		<div className="flex flex-1 flex-row gap-4 items-center text-sm">
			<div>{session?.user?.email}</div>
			<form action={handleSubmit}>
				<button type="submit" className="px-4 py-1 bg-blue-600 rounded-md">
					Logout
				</button>
			</form>
		</div>
	);
}
