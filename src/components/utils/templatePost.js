import { useState, useContext } from 'react';
import Image from "../utils/Image"
import PostUtils from './PostUtils'
import { UserContext } from './contexts/UserContext';

function templatePost(type, Header, Discussions, childType, Expander) {
  return ({discussion, updateDiscussion, index, setShowPostChild, showPostChild}) => {
    const getBtnText = () => childType === 'comments' ? 'comment' : 'reply';
    const getPostChild = () => discussion[childType] ? discussion[childType] : [];
    const user = useContext(UserContext);

    const [postChild, setPostChild] = useState(getPostChild());

    const changeViewHandler = () => {
      if (postChild[0]) {
        setShowPostChild(!showPostChild);
      }
    }

    const updateState = (newState) => {
      setPostChild(newState);
    }

    const handleSubmit = (text) => {
      const newObj = {
        content: text,
        by: user,
        date: new Date().getTime(),
      };

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

    return (
      <div className={`${type}-container`} data-testid={type}>
        <Header user={discussion.by} date={discussion.date ? getDate() : null} />
        {discussion.content ? <div>{discussion.content} </div> : null}
        {discussion.img ? <Image src={discussion.img} alt={`${type} pic`} /> : null}
        <PostUtils isOn={postChild[0] ? true : false} handleSubmit={handleSubmit} handleChildViewer={changeViewHandler} buttonText={getBtnText()} isBtnless={true} />
        {Expander ? postChild.length > 0 ? <button onClick={changeViewHandler}>{`view ${postChild.length} ${childType}`}</button> : null : null}
        {showPostChild ? <Discussions discussions={postChild} updateDiscussions={updateState} /> : null}
      </div>
    )
  }
}

export default templatePost;