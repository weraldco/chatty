type UserT = {
	id: string;
	username: string;
	email: string;
};
type ChatHistoryProps = {
	online: UserT[];
};
export default function ChatHistory({ online }: ChatHistoryProps) {
	console.log(typeof online);
	return (
		<div className="bg-gray-100 px-2 py-10 flex flex-1 flex-col gap-4 h-full">
			<h1 className="text-xl font-semibold">Chats</h1>

			<input type="text" placeholder="Search.." className="px-4 py-2" />
			<ul className="grid gap-4">
				{online.map((u) => (
					<p key={u.id}>{u.username}</p>
				))}
			</ul>
		</div>
	);
}
