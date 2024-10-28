import React from 'react';

export default function ChatHistory() {
	const sampleUserList = [
		'Benjamin Pascual',
		'Apol Coronel',
		'Winwin Opolento',
		'Jissafe Molina',
	];
	return (
		<div className="bg-gray-100 px-2 py-10 flex flex-1 flex-col gap-4 h-full">
			<h1 className="text-xl font-semibold">Chats</h1>

			<input type="text" placeholder="Search.." className="px-4 py-2" />
			<ul className="grid gap-4">
				{sampleUserList.map((user, index) => (
					<li key={index}>
						<button className="bg-gray- w-full px-4 py-2 text-start hover:scale-105 hover:bg-blue-400 duration-200">
							{user}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
