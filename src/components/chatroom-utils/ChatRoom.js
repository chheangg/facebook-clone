import Preview from "./Preview";

const ChatRoom = () => {
	const chatRoomStyle = {
		position: 'absolute',
		top: '2rem',
		right: '1.5rem',
	}
	return (
		<div className='chatroom-container' style={chatRoomStyle}>
			<h2>Chats</h2>
			<input type='text'></input>
			<Preview>
				
			</Preview>
		</div>
	)
}

export default ChatRoom;