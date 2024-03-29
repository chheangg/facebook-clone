import { db } from "../../services/Layout";
import { addDoc, collection, getDocs, query, where, orderBy, limit} from "firebase/firestore";

const chatsLocation = collection(db, 'chats');

function arrToObj(arr) {
  return arr.reduce((obj, next) => {
    return {
      ...obj,
    [next]: true,
    }
  }, {});
}

const createChat = async (content, users) => {
  const newUsers = arrToObj(users);
  const chatData = {
    users: newUsers
  }
  const chatRef = await addDoc(chatsLocation, chatData);
  const contentLocation = collection(db, 'chats', chatRef.id, 'discussions');
  await addDoc(contentLocation, content);
  return chatRef.id;
}

const addChat = async (content, id) => {
  const contentLocation = collection(db, 'chats', id, 'discussions');
  await addDoc(contentLocation, content);
}

const fetchChat = async (users) => {
  let chatData;
  const filterRule = arrToObj(users)
  const chatQuery = query(chatsLocation, where('users', '==', filterRule));
  const querySnapshot = await getDocs(chatQuery);
  querySnapshot.forEach((doc) => {
    chatData = doc.data();
    chatData.id = doc.id;
  })

  if(!chatData) {
    return null;
  }

  chatData.discussions = [];
  const contentLocation = collection(db, 'chats', chatData.id, 'discussions');
  const contentQuery = query(contentLocation, orderBy('time'), limit(15));
  const queryContent = await getDocs(contentQuery);
  queryContent.forEach((doc) => {
    chatData.discussions.push(doc.data())
  })

  return chatData;
}

const fetchChats = async (user) => {
  const chatData = [];
  const chatQuery = query(chatsLocation, where(`users.${user}`, '==', true));
  const queryContent = await getDocs(chatQuery);
  queryContent.forEach((doc) => {
    console.log(doc.data());
    const initialdata = {
      users: Object.keys(doc.data().users),
      id: doc.id,
    }
    chatData.push(initialdata)
  })

  if(!chatData) {
    return null;
  }

  const transChatData = chatData.map(async (data) => {
    let chat = [];
    const chatContent = collection(db, 'chats', data.id, 'discussions');
    const contentQuery = query(chatContent);
    const contentSnapshot = await getDocs(contentQuery);
    contentSnapshot.forEach((doc) => {
      chat.push(doc.data())
    })
    return {...data, discussions: chat};
  });
  return Promise.all(transChatData);
}

export { createChat, fetchChat, addChat, fetchChats };