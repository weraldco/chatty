import React from 'react';

export default function MessagingForm() {
	return (
		<div className="w-full bg-gray-500">
			<form action="" className="bg-gray-200 grid grid-cols-4 p-2 gap-2">
				<input
					type="text"
					placeholder="Say something.."
					className="px-4 py-2 col-span-3"
				/>
				<button className="bg-blue-500 text-white px-4 py-2 hover:scale-105 hover:opacity-85 duration-200 font-semibold">
					Send
				</button>
			</form>
		</div>
	);
}
