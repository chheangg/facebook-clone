import { Outlet } from "react-router-dom";
import Nav from "./navbar/Nav";
import './styles/Layout.scss';
import { useState } from "react";
import ChatRoom from "./chatroom-utils/ChatRoom";

const Layout = () => {
  const [showMessage, setShowMessage] = useState(false);

  const changeMessageView = () => {
    setShowMessage(!showMessage);
  }

  return (
    <div>
      <Nav changeMessageView={changeMessageView} />
      <Outlet />
      {showMessage ? <ChatRoom /> : null}
    </div>
  )
}

export default Layout;