import ProfileHeader from "../utils/ProfileHeader";
import Message from "./Message";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import PostUtils from "../utils/PostUtils";

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
        {chat.map((message) => <Message key={uuidv4()} user={user} message={message} /> )}
      </div>
      <PostUtils handleSubmit={handleSubmit} isBtnless={false} buttonText='Send'/>
    </div>
  )
}

export default Chatbox;