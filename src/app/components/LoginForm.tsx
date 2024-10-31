'use client';
import { loginWithCredentials } from '@/actions/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const LoginForm = () => {
	const [error, setError] = useState<string>('');
	const router = useRouter();
	async function handleSubmit(e: FormEvent<HTMLElement>) {
		e.preventDefault();
		try {
			const formData = new FormData(e.currentTarget as HTMLFormElement);
			const response = await loginWithCredentials(formData);

			if (!!response.error) {
				setError(response.error.message);
			} else {
				router.push('/dashboard');
			}
		} catch (error) {
			setError('All fiend must be required.');
		}
	}
	return (
		<div className="grid items-center justify-center h-screen ">
			<div className="grid gap-4">
				{/* <span className="text-center text-2xl font-bold">
					Welcome to Chatty App
				</span> */}
				<h1 className="text-center text-xl">Login Form</h1>
				{error && <span className="text-xs text-red-600">{error}</span>}
				<form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-2">
					<div className="flex flex-col">
						<label className="text-sm text-gray-500" htmlFor="email">
							Email
						</label>
						<input
							className="px-4 py-2 rounded-lg bg-slate-50"
							type="text"
							name="email"
							id="email"
							placeholder="Your email.."
						/>
					</div>
					<div className="flex flex-col">
						<label className="text-sm text-gray-500" htmlFor="password">
							Password
						</label>
						<input
							className="px-4 py-2 rounded-lg bg-slate-50"
							type="password"
							name="password"
							id="password"
							placeholder="Your password.."
						/>
					</div>

					<button
						className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:scale-105 hover:opacity-90 duration-200 "
						type="submit"
					>
						Login
					</button>
				</form>
				<div className="text-sm">
					Not yet registered?{' '}
					<Link className="text-blue-600" href={'/registration'}>
						Sign-up here!
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
