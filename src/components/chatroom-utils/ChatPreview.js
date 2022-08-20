import ProfileHeader from "../utils/ProfileHeader"

const ChatPreview = ({chatData, user, utils}) => {
	const getUser = () => {
		const partner = chatData.users.find((person) => person.id !== user.id);
		return partner;
	}
	const getPreviewMsg = () => {
		const discussions = chatData.discussions;
		const metaData = discussions[discussions.length - 1];
		const previewName = metaData.by.name === user.name ? "you" : metaData.by.name;

		if (metaData.img) {
			return `${previewName} sent an image`
		}
		return `${previewName}: ${metaData.content}`
	}
	
	return (
		<div onClick={() => utils.addToCurrentMsgs(chatData)}>
			<ProfileHeader user={getUser()} metaData={getPreviewMsg()} />
		</div>
	)
}

export default ChatPreview;