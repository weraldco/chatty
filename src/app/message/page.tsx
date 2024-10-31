import { message } from '@/lib/data';
import React from 'react';

export default function MessagesPage() {
	const conversationWeraldWinwin = message.filter(
		(msg) => msg.user === 'werald' && msg.sentTo === 'winwin'
	);

	const conversationWinwinWerald = message.filter(
		(msg) => msg.user === 'winwin' && msg.sentTo === 'werald'
	);
	const convo = conversationWeraldWinwin
		.concat(conversationWinwinWerald)
		.sort(
			(a, b) => new Date(a.dateSent).getTime() - new Date(b.dateSent).getTime()
		);

	console.log(convo);

	return (
		<div className="flex justify-center items-center">
			<h1 className="text-xl font-bold">Message</h1>
			<div>
				{convo.map((msg, i) =>
					msg.user === 'werald' ? (
						<div key={i}>{msg.message}</div>
					) : (
						<div key={i}>{msg.message}</div>
					)
				)}
			</div>
		</div>
	);
}
