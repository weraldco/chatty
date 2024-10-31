import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from './lib/db';

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	session: { strategy: 'jwt' },
	providers: [
		Credentials({
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'email@example.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			authorize: async (credentials) => {
				let user = null;
				try {
					const email = credentials.email as string;

					// const pwHash = credentials.password;
					user = await prisma.user.findUnique({ where: { email } });

					if (!user) {
						throw new Error('User not found!');
					} else {
						// const isMatch = user?.password === credentials?.password;
						const isMatch = bcrypt.compareSync(
							credentials.password as string,
							user.password
						);
						if (isMatch) {
							await prisma.online.create({
								data: {
									username: user.username,
									email: email,
								},
							});
							return user;
						} else {
							throw new Error('Incorrect password.');
						}
					}
				} catch (error) {
					console.error(error);
					throw new Error('Something not right.');
				}
			},
		}),
	],
});
