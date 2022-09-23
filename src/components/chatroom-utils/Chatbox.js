import ProfileHeader from "../utils/ProfileHeader";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import ChatUtils from "./ChatUtils";
import ChatBlock from "./ChatBlock";
import { createChat } from "./services/Chat";
import { fetchChat, addChat } from "./services/Chat";
import { getAccount, getPic } from "../services/Layout";

const Chatbox = ({currentUser, user, discussions}) => {
  // Function that divides individual pieces of chat into block that has ownership.
  const getChatBlock = (discussions) => {
    return discussions.reduce((lists, chat, i) => {
      // Create a new chat object to avoid mutability problem.
      const newChat = {...chat}

      // This will take the current array list that is being 'reduced' and add a new chat block
      function addBlock() {
        const newBlock = {
          by: chat.by,
          contents: [{...(delete newChat.by && newChat)}]
        }
        lists.push(newBlock);
      }

      // Obviously, create a chat block since it doesn't exist
      if (i === 0) {
        addBlock();
        return lists;
      }
      else {
        // If the lastest chatblock ownership matches the current chat ownership, add them together, otherwise don't.
        if (lists[lists.length - 1].by.id === chat.by.id) {

            lists[lists.length - 1].contents.push({...(delete newChat.by && newChat)});
            return lists; 
        } else {
          addBlock();
          return lists;
        }
      }
    }, [])
  }

  const [chatBlock, setChatBlock] = useState(getChatBlock(discussions));
  const [id, setId] = useState(null);
  const [userAccount, setUserAccount] = useState({id: user});

  const handleSubmit = (text) => {
    const message = {
      content: text,
      time: new Date().getTime(),
    };
    const requestMessage = {...message, by: currentUser};
    const newChatBlock = [...chatBlock];
    if (chatBlock.length === 0 || chatBlock[chatBlock.length - 1].by.id !== currentUser.id) {
      const newBlock = {
        by: currentUser,
        contents: [message],
      }
      // Initiate chat
      if (chatBlock.length === 0) {
        const users = [currentUser.id , userAccount.id]
        createChat(requestMessage, users).then((id) => setId(id));
        newChatBlock.push(newBlock);
      } else {
        newChatBlock.push(newBlock);
        addChat(requestMessage, id);
      }
    } else if (chatBlock[chatBlock.length - 1].by.id === currentUser.id) {
      newChatBlock[newChatBlock.length - 1].contents.push(message);
      addChat(requestMessage, id);
    }
    setChatBlock(newChatBlock);
  }

  const loadChat = () => {
    const chatData = fetchChat([currentUser.id, userAccount.id]);
    chatData.then((data) => {
      if (!data) {
        setChatBlock([]);
      } else {  
        setChatBlock(getChatBlock(data.discussions));
        setId(data.id);
      }
    })
  }

  const getUserAccount = () => {
		const userData = getAccount(user);
		const userPic = getPic(user);

		userData.then((data) => {
		  const name = `${data.firstName} ${data.lastName}`;
      setUserAccount({...userAccount, name})
		})

		userPic.then((data) => {
      setUserAccount({...userAccount, img: data})
		}).catch(error => console.log('hi'));

	}

	useEffect(getUserAccount, [])
  useEffect(loadChat, [])

  return (
    <div className='main-chat-container'>
      <ProfileHeader user={userAccount} />
      <div className='chat-container'>
        {chatBlock.map((block) => <ChatBlock key={uuidv4()} currentUser={currentUser} user={block.by} contents={block.contents} /> )}
      </div>
      <ChatUtils handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Chatbox;