import ProfilePicture from "../utils/ProfilePicture";
import { getPic, getAccount } from "../services/Layout";
import { useEffect, useState } from "react";

const ChatPreview = ({chatData, user, utils}) => {
	const [counterpart, setCounterpart] = useState({name: null, id: null, id: null});
	const getUser = () => {
		let partnerData = {};
		const partner = chatData.users.find((person) => person !== user.id);
		const partnerInfo = getAccount(partner);
		const data = partnerInfo.then((data) => {
			partnerData.name = `${data.firstName} ${data.lastName}`
			setCounterpart(partnerData)
		})
	}
	const getPreviewMsg = () => {
		const discussions = chatData.discussions;
		const metaData = discussions[discussions.length - 1];
		const previewName = metaData.by.name === user.name ? "You" : metaData.by.name;

		if (metaData.img) {
			return `${previewName} sent an image`
		}
		return `${previewName}: ${metaData.content}`
	}

	useEffect(getUser, [])
	
	return (
		<div className='preview-container' onClick={() => utils.addToCurrentMsgs(chatData)}>
			<ProfilePicture user={counterpart} />
			<div className='preview-name-container'>{counterpart.name}</div>
			<div className='preview-msg'>{getPreviewMsg()}</div>
		</div>
	)
}

export default ChatPreview;