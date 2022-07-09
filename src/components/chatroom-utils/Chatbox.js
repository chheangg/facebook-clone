import ProfileHeader from "./ProfileHeader";
import Message from "./Message";
import { v4 as uuidv4 } from 'uuid';

const Chatbox = ({user, messages}) => {
  return (
    <div>
      <ProfileHeader user={user} />
      <div>
        {messages.map((message) => <Message key={uuidv4()} user={user} message={message} data-testid='message'/> )}
      </div>
    </div>
  )
}

export default Chatbox;