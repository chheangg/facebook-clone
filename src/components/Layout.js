import { Outlet } from "react-router-dom";
import Nav from "./navbar/Nav";
import { useEffect, useState } from "react";
import ChatRoom from "./chatroom-utils/ChatRoom";
import ChatOverlay from "./chatroom-utils/ChatOverlay";
import Chatbox from "./chatroom-utils/Chatbox";
import Authenticate from "./loginpage-utils/Authenticate";
import Account from "./loginpage-utils/Account";
import { createAccount, signIn, signOutOfApp, onAuthStateChanged, getAccount, getPic, auth } from './services/Layout';
import DropDown from "./navbar/DropDown";
import ProfileHeader from "./utils/ProfileHeader";
import Button from "./utils/Button";
import { UserContext } from './utils/contexts/UserContext'
import defaultImg from './assets/default-profile-icon-24.jpg'
import { v4 as uuidv4 } from 'uuid';
import Welcome from "./loginpage-utils/Welcome";
import './styles/Layout.scss';
import './styles/Page.scss';
import './styles/Authentication.scss';
import './styles/Post.scss';
import './styles/Comment.scss';
import './styles/Reply.scss';
import './styles/Preview.scss';
import './styles/Chat.scss';

const Layout = ({currentMsgs, setCurrentMsgs, addToCurrentMsgs}) => {
  const [isLogin, setIsLogin] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [chatData, setChatData] = useState([]);

  const handleRegisterPop = () => {
    setIsRegister(!isRegister)
  }

  const changeMessageView = () => {
    setShowMessage(!showMessage);
  }

  const removeFromCurrentMsgs = (id) => {
    const newCurrentMsgs = currentMsgs.filter((msg) => msg.uuid !== id);
    setCurrentMsgs(newCurrentMsgs);
  }

  const getUser = (chatData) => {
		const partner = chatData.users.find((person) => person !== currentUser.id);
    if (!partner) {
      return currentUser;
    }
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
      const userCurrent = {
        name: `${capitalizeFirst(userInfo.firstName)} ${capitalizeFirst(userInfo.lastName)}`,
        id: user.uid,
      }
      
      setIsLogin(true);
      setUser(userInfo);
      getPic(user.uid).then((picUrl) => {
        userCurrent.img = picUrl;
      }).catch(() => {
        userCurrent.img = null;
      })
      setCurrentUser(userCurrent);
    } else {
      setIsLogin(false);
      signOutOfApp()
    }
  }

  const stateChange = () => {
    onAuthStateChanged(auth, authObserver)
  }

  useEffect(stateChange, []);

  if (isLogin === null) {
    return (
      <div>
        Loading
      </div>
    )
  }
  if(isLogin === false) {
    return (
      <div className='authentication-container'>
        <Welcome />
        <Authenticate handleRegisterPop={handleRegisterPop} signIn={signIn} />
        {isRegister ? <Account createAccount={createAccount} handleRegisterPop={handleRegisterPop} /> : null}
      </div>
    )
  }

  return (
    <div className='page-container'>
      <Nav changeMessageView={changeMessageView} handleProfileSetting={handleProfileSetting} user={currentUser}/>
      <UserContext.Provider value={currentUser}>
        <Outlet />
      </UserContext.Provider>
      {showMessage ? <ChatRoom chatData={chatData} user={currentUser} utils={{addToCurrentMsgs}} /> : null}
      {currentMsgs.length > 0 ?
      <ChatOverlay>
        {currentMsgs.map(chat => <Chatbox key={uuidv4()} currentUser={currentUser} user={getUser(chat)} discussions={chat.discussions} />)}
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