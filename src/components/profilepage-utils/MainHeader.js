import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";

const MainHeader = ({user, addToCurrentMsgs}) => {
  const currentUser = useContext(UserContext);
  const openMessageBox = () => {
    const chatData = {
      id: user.uid,
      users: [currentUser.id , user.uid],
      discussions: [],
    }
    addToCurrentMsgs(chatData);
  }
  return (
    <div>
      <img alt='profile cover' src={user.cover}></img>
      <div>
        <img alt='profile pic' src={user.img}></img>
        <div>{`${user.firstName} ${user.lastName}`}</div>
        <button onClick={openMessageBox}>Send Message</button>
      </div>
    </div>
  )
}

export default MainHeader;