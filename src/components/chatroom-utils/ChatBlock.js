import ProfilePicture from "../utils/ProfilePicture"
import Message from "./Message"
import { v4 as uuidv4 } from 'uuid';

const ChatBlock = ({currentUser, user, contents}) => {
  const checkSide = () => currentUser.name === user.name;
  return (
    <div>
      <ProfilePicture user={user} />
      <div>
        <div className={`${checkSide() ? 'right' : 'left'}-side-message`}data-testid={checkSide() ? 'right' : 'left'}>{user.name}</div>
        {contents.map((content) => <Message key={uuidv4()} discussion={content} />)}
      </div>
    </div>
  )
}

export default ChatBlock;