'use server';
import { signIn, signOut } from '@/auth';
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function loginWithCredentials(formData: FormData) {
	try {
		const response = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
			redirect: false,
		});

		return response;
	} catch (error) {
		throw new Error('Cannot get the datas.');
	}
}

export async function logout() {
	await signOut({ redirectTo: '/' });
	revalidatePath('/');
}

export async function getUserFromDb(email, password) {
	const foundUser = await prisma.user.findUnique({
		where: { email, password },
	});
	return foundUser;
}
async function getUserByEmail(email: string) {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});
		return user;
	} catch (error) {
		console.log(error);
		return null;
	}
}

async function getUserByUsername(username: string) {
	try {
		const user = await prisma.user.findUnique({
			where: {
				username,
			},
		});
		return user;
	} catch (error) {
		console.log(error);
		return null;
	}
}

export async function registerNewUser(formData: FormData) {
	try {
		const existingEmail = await getUserByEmail(formData.get('email') as string);
		const existingUsername = await getUserByUsername(
			formData.get('username') as string
		);

		if (!existingEmail && !existingUsername) {
			await prisma.user.create({
				data: {
					username: formData.get('username') as string,
					fullname: formData.get('fullname') as string,
					email: formData.get('email') as string,
					password: formData.get('password') as string,
				},
			});
		} else {
			console.log('Existing email or username, try again!');
		}
	} catch (error) {
		console.error(error);
	} finally {
		revalidatePath('/');
		redirect('/');
	}
}