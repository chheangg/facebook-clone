import { useState, useContext, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import { addPost, fetchPosts  } from "../homepage-utils/services/HomePage";
import { db } from "../services/Layout";
import { collection } from "firebase/firestore";


const pageLayout = (Header, Discussions, type) => {
  return ({discussions}) => {
    const [post, setPosts] = useState(discussions ? discussions : []);
    const user = useContext(UserContext);
    const postsRef = collection(db, 'posts')

    const handleSubmit = async (text) => {
      const newObj = {
        content: text,
        by: user,
        date: new Date().getTime(),
      };
      const id = await addPost(newObj, postsRef);
      newObj.id = id;
      setPosts([...post, newObj]);
    };

    const updateState = (newPost) => {
      setPosts(newPost)
    }

    const pageEffect = () => {
      const posts = fetchPosts(type, postsRef);
      posts.then((data) => setPosts([...post, ...data]));
    }

    useEffect(pageEffect, []);

    return (
      <div>
        <Header handleSubmit={handleSubmit}/>
        <Discussions discussions={post} updateDiscussions={updateState} />
      </div>
    )
  }
}

export default pageLayout;