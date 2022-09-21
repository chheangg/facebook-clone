import { Link } from "react-router-dom"
import Replies from "../replies-utils/Replies"
import CommentUtils from "./CommentUtils"
import { useEffect, useContext, useState } from "react"
import Image from "../utils/Image"
import { UserContext } from '../utils/contexts/UserContext';
import { addPost, fetchPosts } from '../homepage-utils/services/HomePage';
import { db } from '../services/Layout'
import { collection } from 'firebase/firestore';
import ProfilePicture from "../utils/ProfilePicture"

const Comment = ({discussion, updateDiscussion, index, parentId, id}) => {
  const getPostChild = () => discussion['replies'] ? discussion['replies'] : [];
  const user = useContext(UserContext);
  const ref =  `${parentId}/${id}/replies`
  const childRef = collection(db, ref)
  const [showReplies, setShowReplies] = useState(getPostChild());
  const [replies, setReplies] = useState(getPostChild());

  const changeViewHandler = () => {
    setShowReplies(!showReplies);
  }

  const updateState = (newState) => {
    setReplies(newState);
  }

  const handleSubmit = async (text) => {
    const newObj = {
      content: text,
      by: user,
      date: new Date().getTime(),
    };

    const id = await addPost(newObj, childRef);
      newObj.id = id;

    const newChildren = [...replies, newObj]
    
    setReplies(newChildren);
    updateDiscussion('replies', newChildren, index);
    setShowReplies(true);
    }

  const getDate = () => {
    const date = new Date(parseInt(discussion.date));
    const time = date.toLocaleString();
    return time;
  }

  const childEffect = () => {
    const posts = fetchPosts('comment', childRef);
    posts.then((data) => setReplies([...replies, ...data]));
  }

  useEffect(childEffect, []);

  return (
    <div className={`comment-container`} data-testid='comment'>
      <div className='main-comment-container'>
        <ProfilePicture user={discussion.by} />
        <div className='main-content-container'>
          <Link to={`/profile/${user.id}`} className='username' data-testid='username'>{user.name}</Link>
          {discussion.content ? <div className='content-container'>{discussion.content} </div> : null}
          {discussion.img ? <Image src={discussion.img} alt='replies' /> : null}
        </div>
      </div>
      <div className='sub-comment-container'>
        <CommentUtils isOn={replies[0] ? true : false} handleSubmit={handleSubmit} handleChildViewer={changeViewHandler} />
        <div className='date-container'>{getDate()}</div>
      </div>
      {Replies.length > 0 ? <button className='expand-btn' onClick={changeViewHandler}>{`view ${replies.length} replies`}</button> : null}
      {showReplies ? <Replies discussions={replies} updateDiscussions={updateState} parentId={ref} /> :
       replies[0] !== undefined ? <Replies discussions={[replies[0]]} updateDiscussions={updateState} parentId={ref} /> : null}
    </div>
  )
}

export default Comment;