import ProfileHeader from "./ProfileHeader"
import Comments from "../comments-utils/Comments";
import { useState, useContext, useEffect } from 'react';
import Image from "../utils/Image"
import PostUtils from './PostUtils'
import { UserContext } from './contexts/UserContext';
import { addPost, fetchPosts } from '../homepage-utils/services/HomePage';
import { db } from '../services/Layout'
import { collection } from 'firebase/firestore';

  const Post = ({discussion, updateDiscussion, index, parentId, id}) => {
    const getComments = () => discussion['comments'] ? discussion['comments'] : [];
    const user = useContext(UserContext);
    const ref =  `${parentId}/${id}/comments`
    const childRef = collection(db, ref)
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState(getComments());

    const changeViewHandler = () => {
      setShowComments(!showComments);
    }

    const updateState = (newState) => {
      setComments(newState);
    }

    const handleSubmit = async (text) => {
      const newObj = {
        content: text,
        by: user,
        date: new Date().getTime(),
      };

      const id = await addPost(newObj, childRef);
        newObj.id = id;

      const newChildren = [...comments, newObj]
      
      setComments(newChildren);
      updateDiscussion('comments', newChildren, index);
      setShowComments(true);
      }

    const getDate = () => {
      const date = new Date(parseInt(discussion.date));
      const time = date.toLocaleString();
      return time;
    }

    const childEffect = () => {
      const posts = fetchPosts('comment', childRef);
      posts.then((data) => setComments([...comments, ...data]));
    }

    useEffect(childEffect, [])

    return (
      <div className='post-container' data-testid='post'>
        <ProfileHeader user={discussion.by} date={discussion.date ? getDate() : null} />
        {discussion.content ? <div className='content-container'> {discussion.content} </div> : null}
        {discussion.img ? <Image src={discussion.img} alt='post pic' /> : null}
        <PostUtils isOn={comments[0] ? true : false} handleSubmit={handleSubmit} handleChildViewer={changeViewHandler} />
        {showComments ? <Comments discussions={comments} updateDiscussions={updateState} parentId={ref} /> :
         comments[0] !== undefined ? <Comments discussions={[comments[0]]} updateDiscussions={updateState} parentId={ref} /> : null}
      </div>
    )
  }

export default Post;