import ProfilePicture from "../utils/ProfilePicture"
import Message from "./Message"
import { v4 as uuidv4 } from 'uuid';

const ChatBlock = ({currentUser, user, contents}) => {
  const checkSide = () => currentUser.id === user.id ? 'right' : 'left';
  const getName = () => user.name.split(/(\s+)/)[user.name.split(/(\s+)/).length - 1];
  if (checkSide() === 'right') {
    return (
      <div className='right chatblock-side-message ' data-testid='right'>
      {console.log('hi')}
      <div className='chatblock-content'>
        {contents.map((content) => <Message key={uuidv4()} discussion={content} />)}
      </div>
      <ProfilePicture user={user} />
    </div>
    )
  }
  return (
    <div className='left chatblock-side-message' data-testid='left'>
      <ProfilePicture user={user} />
      <div className='chatblock-content'>
        <div className='username'>{getName()}</div>
        {contents.map((content) => <Message key={uuidv4()} discussion={content} />)}
      </div>
    </div>
  )
}

export default ChatBlock;