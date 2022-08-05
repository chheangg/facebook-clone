import { Outlet } from "react-router-dom";
import Nav from "./navbar/Nav";
import './styles/Layout.scss';
import { useEffect, useState } from "react";
import ChatRoom from "./chatroom-utils/ChatRoom";
import ChatOverlay from "./chatroom-utils/ChatOverlay";
import { chatProp, userOne } from './chatroom-utils/ExampleProp';
import Chatbox from "./chatroom-utils/Chatbox";
import Authenticate from "./loginpage-utils/Authenticate";
import Account from "./loginpage-utils/Account";
import { createAccount, signIn, signOutOfApp, onAuthStateChanged, getAccount, getPic, auth } from './services/Layout';
import DropDown from "./navbar/DropDown";
import ProfileHeader from "./utils/ProfileHeader";
import Button from "./utils/Button";


const Layout = () => {
  const [isLogin, setIsLogin] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentMsgs, setCurrentMsgs] = useState([]);
  const [chatData, setChatData] = useState(chatProp);

  const handleRegisterPop = () => {
    setIsRegister(!isRegister)
  }

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

  const handleProfileSetting = () => {
    setShowSetting(!showSetting);
  }

  const signOut = () => {
    signOutOfApp()
    setUser(null)
  }

  const capitalizeFirst = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  const authObserver = async (user) => {
    if (user) {
      const userInfo = await getAccount(user.uid);
      setIsLogin(true);
      setUser(userInfo);
      getPic(user.uid).then((picUrl) => {
        setCurrentUser(
          {
            name: `${capitalizeFirst(userInfo.firstName)} ${capitalizeFirst(userInfo.lastName)}`,
            img: picUrl,
          }
        )
      })
      
    } else {
      setIsLogin(false);
      signOutOfApp()
    }
  }

  const stateChange = () => {
    onAuthStateChanged(auth, authObserver)
  }
  useEffect(stateChange, [])

  if (isLogin === null) {
    return (
      <div>
        Loading
      </div>
    )
  }
  if(isLogin === false) {
    return (
      <div>
        <div>
        </div>
        <Authenticate handleRegisterPop={handleRegisterPop} signIn={signIn} />
        {isRegister ? <Account createAccount={createAccount} handleRegisterPop={handleRegisterPop} /> : null}
      </div>
    )
  }

  return (
    <div>
      <Nav changeMessageView={changeMessageView} handleProfileSetting={handleProfileSetting} user={currentUser}/>
      <Outlet />
      {showMessage ? <ChatRoom chatData={chatData} user={currentUser} utils={{addToCurrentMsgs}} /> : null}
      {currentMsgs.length > 0 ?
      <ChatOverlay>
        {currentMsgs.map(chat => <Chatbox key={chat.id} currentUser={currentUser} user={getUser(chat)} discussions={chat.discussions} />)}
      </ChatOverlay>
      : null}
      {showSetting ? 
      <DropDown>
        <ProfileHeader user={currentUser} />
        <Button text='Log out' func={signOut} />
      </DropDown> :
      null}
    </div>
  )
}

export default Layout;