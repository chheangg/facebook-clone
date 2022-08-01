import ProfileHeader from "../utils/ProfileHeader"

const ChatPreview = (chatData) => {
    const getUser = () => {
        return chatData.user[0]
    }
    return (
        <div>
            <ProfileHeader user={getUser()} metaData={chatData.discussion[length - 1]} />
            <div>{chatData.discussion}</div>
        </div>
    )
}