import ProfileHeader from "../utils/ProfileHeader";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import ChatUtils from "./ChatUtils";
import ChatBlock from "./ChatBlock";
import { createChat } from "./services/Chat";
import { fetchChat, addChat } from "./services/Chat";

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
        const users = [currentUser, user]
        createChat(requestMessage, users);
      } else {
        newChatBlock.push(newBlock);
        addChat(requestMessage, id);
      }
    } else if (chatBlock[chatBlock.length - 1].by.id === currentUser.id) {
      newChatBlock[newChatBlock.length - 1].contents.push(message);
      addChat(requestMessage, id);
    }
    setChatBlock(newChatBlock)  
  }

  const loadChat = () => {
    const chatData = fetchChat([currentUser, user]);
    chatData.then((data) => {
      if (!data) {
        setChatBlock([]);
      } else {
        setChatBlock(getChatBlock(data.discussions));
        setId(data.id);
      }
    })
  }

  useEffect(loadChat, [])

  return (
    <div>
      <ProfileHeader user={user} />
      <div>
        {chatBlock.map((block) => <ChatBlock key={uuidv4()} currentUser={currentUser} user={block.by} contents={block.contents} /> )}
      </div>
      <ChatUtils handleSubmit={handleSubmit} isBtnless={false} buttonText='Send'/>
    </div>
  )
}

export default Chatbox;