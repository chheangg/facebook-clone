import ProfileHeader from "./ProfileHeader";
import Message from "./Message";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import MessUtils from "./MessUtils";

const Chatbox = ({user, messages}) => {
  const [chat, setChat] = useState(messages);
  const handleSubmit = (text) => {
    const message = {
      text: text,
      by: 'Chheang',
      time: new Date().getTime(),
    };

    setChat([...chat, message]);
  }

  return (
    <div>
      <ProfileHeader user={user} />
      <div>
        {chat.map((message) => <Message key={uuidv4()} user={user} message={message} data-testid='message'/> )}
      </div>
      <MessUtils handleSubmit={handleSubmit} />
    </div>
  )
}

export default Chatbox;