import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { getUserFromDb } from './actions/auth';
// import { saltAndHashPassword } from './utils/helper';

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
					// const pwHash = saltAndHashPassword(credentials.password);
					const pwHash = credentials.password;
					user = await getUserFromDb(credentials?.email, pwHash);

					if (!user) {
						throw new Error('User not found!');
					} else {
						const isMatch = user?.password === credentials?.password;
						if (isMatch) {
							return user;
						} else {
							throw new Error('Incorrect password.');
						}
					}
				} catch (error) {
					throw new Error('Something not right.');
				}
			},
		}),
	],
});
