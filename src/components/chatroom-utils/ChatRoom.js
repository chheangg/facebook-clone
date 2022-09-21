import Preview from "./Preview";
import ChatPreview from "./ChatPreview";
import { v4 as uuidv4 } from 'uuid';
import { fetchChats } from "./services/Chat";
import { useEffect, useState } from "react";

const ChatRoom = ({user, chatData, utils}) => {
	const [chats, setChats] = useState(chatData ? chatData : []);

	const fetchChatsEffect = () => {
		const newChats = fetchChats(user);
		newChats.then((data) => {
			setChats(data);
		});
	}

	useEffect(fetchChatsEffect, []);

	const chatRoomStyle = {
		position: 'absolute',
		top: '2rem',
		right: '1.5rem',
		zIndex: '2',
	}
	return (
		<div className='chatroom-container' style={chatRoomStyle}>
			<h2>Chats</h2>
			<input type='text'></input>
			<Preview>
				{chats.map((data) => <ChatPreview utils={utils} key={uuidv4()} chatData={data} user={user} />)}
			</Preview>
		</div>
	)
}

export default ChatRoom;