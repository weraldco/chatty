import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Chatty - Messaging app for all of us',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={` antialiased`}>
				<div className="">{children}</div>
			</body>
		</html>
	);
}
