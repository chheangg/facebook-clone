import { useState, useContext, useEffect } from 'react';
import Image from "../utils/Image"
import PostUtils from './PostUtils'
import { UserContext } from './contexts/UserContext';
import { addPost, fetchPosts } from '../homepage-utils/services/HomePage';
import { db } from '../services/Layout'
import { collection } from 'firebase/firestore';

function templatePost(type, Header, Discussions, childType, Expander) {
  return ({discussion, updateDiscussion, index, setShowPostChild, showPostChild, parentId, id}) => {
    const getBtnText = () => childType === 'comments' ? 'comment' : 'reply';
    const getPostChild = () => discussion[childType] ? discussion[childType] : [];
    const user = useContext(UserContext);
    const ref =  `${parentId}/${id}/${childType}`
    const childRef = collection(db, ref)

    const [postChild, setPostChild] = useState(getPostChild());

    const changeViewHandler = () => {
      setShowPostChild(!showPostChild);
    }

    const updateState = (newState) => {
      setPostChild(newState);
    }

    const handleSubmit = async (text) => {
      const newObj = {
        content: text,
        by: user,
        date: new Date().getTime(),
      };

      const id = await addPost(newObj, childRef);
      newObj.id = id;

      const newChildren = [...postChild, newObj]
      setPostChild(newChildren);
      updateDiscussion(childType, newChildren, index);
      setShowPostChild(true);
    }

    const getDate = () => {
      const date = new Date(parseInt(discussion.date));
      const time = date.toLocaleString();
      return time;
    }

    const childEffect = () => {
      const posts = fetchPosts(type, childRef);
      posts.then((data) => setPostChild([...postChild, ...data]));
    }

    useEffect(childEffect, [])

    return (
      <div className={`${type}-container`} data-testid={type}>
        <Header user={discussion.by} date={discussion.date ? getDate() : null} />
        {discussion.content ? <div>{discussion.content} </div> : null}
        {discussion.img ? <Image src={discussion.img} alt={`${type} pic`} /> : null}
        <PostUtils isOn={postChild[0] ? true : false} handleSubmit={handleSubmit} handleChildViewer={changeViewHandler} buttonText={getBtnText()} isBtnless={true} />
        {Expander ? postChild.length > 0 ? <button onClick={changeViewHandler}>{`view ${postChild.length} ${childType}`}</button> : null : null}
        {showPostChild ? <Discussions discussions={postChild} updateDiscussions={updateState} parentId={ref} /> :
         postChild[0] !== undefined ? <Discussions discussions={[postChild[0]]} updateDiscussions={updateState} parentId={ref} /> : null}
      </div>
    )
  }
}

export default templatePost;