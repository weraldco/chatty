import { registerNewUser } from '@/actions/auth';
import Link from 'next/link';
import React from 'react';

const RegistrationForm = () => {
	return (
		<div className="grid items-center justify-center h-screen ">
			<div className="grid gap-4">
				{/* <span className="text-center text-2xl font-bold">
					Welcome to Chatty App
				</span> */}
				<h1 className="text-center text-xl font-semibold">Registration Form</h1>
				<form action={registerNewUser} className="flex flex-1 flex-col gap-2">
					<div className="flex flex-col">
						<label htmlFor="fullname" className="text-xs text-gray-500">
							Fullname
						</label>
						<input
							className="px-4 py-2 rounded-lg bg-slate-50"
							type="text"
							id="fullname"
							placeholder="Your fullname.."
							name="fullname"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="username" className="text-xs text-gray-500">
							Username
						</label>
						<input
							className="px-4 py-2 rounded-lg bg-slate-50"
							type="text"
							id="username"
							placeholder="Your username.."
							name="username"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="email" className="text-xs text-gray-500">
							Email
						</label>
						<input
							className="px-4 py-2 rounded-lg bg-slate-50"
							type="text"
							id="email"
							placeholder="Your email.."
							name="email"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="password" className="text-xs text-gray-500">
							Password
						</label>
						<input
							className="px-4 py-2 rounded-lg bg-slate-50"
							type="password"
							id="password"
							placeholder="Your password.."
							name="password"
						/>
					</div>

					<button
						className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:scale-105 hover:opacity-90 duration-200 "
						type="submit"
					>
						Register
					</button>
				</form>
				<div className="text-sm text-gray-500">
					Already Registered?
					<Link className="text-blue-600" href={'/'}>
						{' '}
						Sign-in here!
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RegistrationForm;
