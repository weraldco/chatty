import React from 'react';
import MessagingForm from './MessagingForm';

export default function Messages() {
	return (
		<div className="bg-white px-2 py-10 flex flex-1 flex-col gap-4 h-full col-span-2 ">
			<h1 className="text-xl font-semibold">Messages</h1>
			<div className="grid p-2 gap-4">
				<div className=" bg-gray-100 p-2 rounded-lg">
					<h1 className="text-sm font-bold">Receiver</h1>
					<span>Hi what sup?</span>
				</div>
				<div className="bg-blue-300 p-2 rounded-lg text-right">
					<h1 className="text-sm  font-bold">Sender</h1>
					<span>Yow! I&#39;m fine, how about you?</span>
				</div>
				<div className=" bg-gray-100 p-2 rounded-lg">
					<h1 className="text-sm font-bold">Receiver</h1>
					<span>Just fine too!</span>
				</div>
			</div>
			<MessagingForm />
		</div>
	);
}
