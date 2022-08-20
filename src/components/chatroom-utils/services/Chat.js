import { db } from "../../services/Layout";
import { addDoc, collection, getDocs, query, where, orderBy, limit} from "firebase/firestore";

const chatsLocation = collection(db, 'chats');

const createChat = async (content, users) => {
  const chatData = {
    users
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
  const chatQuery = query(chatsLocation, where('users', 'array-contains-any', users));
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

export { createChat, fetchChat, addChat };