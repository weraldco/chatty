'use client';
import { logout } from '@/actions/auth';

export default function LogoutButton() {
	return (
		<button
			onClick={() => logout()}
			className="px-4 py-1 bg-blue-600 rounded-md"
		>
			Logout
		</button>
	);
}
