import { auth } from '@/auth';
// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LoggedUser from './LoggedUser';

export default async function Header() {
	const session = await auth();
	console.log(session);
	return (
		<nav className="flex flex-1 flex-row bg-gray-900 px-4 py-2 justify-between items-center">
			<div className="grid items-center text-2xl">
				<Link className="text-white font-semibold" href={'/'}>
					Chatty
				</Link>
			</div>
			<div className="text-white">
				{session?.user ? <LoggedUser /> : 'Sign-up'}
				{/* <Image
					src={'/user.jpg'}
					width={40}
					height={40}
					style={{ objectFit: 'contain', borderRadius: '100px' }}
					alt="user"
				/>  */}
			</div>
		</nav>
	);
}
