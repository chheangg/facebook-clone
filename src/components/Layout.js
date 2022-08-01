import { Outlet } from "react-router-dom";
import Nav from "./navbar/Nav";
import './styles/Layout.scss';
import { useState } from "react";
import ChatRoom from "./chatroom-utils/ChatRoom";
import ChatOverlay from "./chatroom-utils/ChatOverlay";
import { chatProp, userOne } from './chatroom-utils/ExampleProp';
import Chatbox from "./chatroom-utils/Chatbox";
import { v4 as uuidv4 } from 'uuid';

const Layout = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [user, setUser] = useState(userOne);
  const [currentMsgs, setCurrentMsgs] = useState([]);
  const [chatData, setChatData] = useState(chatProp);

  const changeMessageView = () => {
    setShowMessage(!showMessage);
  }

  const addToCurrentMsgs = (chat) => {
    setCurrentMsgs(currentMsgs.concat(chat));
  }

  const removeFromCurrentMsgs = (id) => {
    const newCurrentMsgs = currentMsgs.filter((msg) => msg.uuid !== id);
    setCurrentMsgs(newCurrentMsgs);
  }

  const getUser = (chatData) => {
		const partner = chatData.users.find((person) => person.name !== user.name);
		return partner;
	}

  return (
    <div>
      <Nav changeMessageView={changeMessageView} />
      <Outlet />
      {showMessage ? <ChatRoom chatData={chatData} user={user} utils={{addToCurrentMsgs}} /> : null}
      {currentMsgs.length > 0 ?
      <ChatOverlay>
        {currentMsgs.map(chat => <Chatbox key={chat.id} currentUser={user} user={getUser(chat)} discussions={chat.discussions} />)}
      </ChatOverlay>
      : null}
    </div>
  )
}

export default Layout;