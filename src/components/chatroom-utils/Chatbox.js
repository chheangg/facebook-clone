import ProfileHeader from "../utils/ProfileHeader";
import Message from "./Message";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import ChatUtils from "./ChatUtils";

const Chatbox = ({user, discussions}) => {
  const [chat, setChat] = useState(discussions ? discussions : []);
  const handleSubmit = (text) => {
    const message = {
      content: text,
      by: 'Chheang',
      time: new Date().getTime(),
    };

    setChat([...chat, message]);
  }

  return (
    <div>
      <ProfileHeader user={user} />
      <div>
        {chat.map((message) => <Message key={uuidv4()} user={user} discussion={message} /> )}
      </div>
      <ChatUtils handleSubmit={handleSubmit} isBtnless={false} buttonText='Send'/>
    </div>
  )
}

export default Chatbox;