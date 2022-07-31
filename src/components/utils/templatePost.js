import { useState } from 'react';
import Image from "../utils/Image"
import PostUtils from './PostUtils'

function templatePost(type, Header, Discussions, childType, Expander) {
  return ({discussion}) => {
    const getBtnText = () => childType === 'comments' ? 'comment' : 'reply';
    const getPostChild = () => discussion[childType] ? discussion[childType] : [];

    const [showPostChild, setShowPostChild] = useState(false);
    const [postChild, setPostChild] = useState(getPostChild());

    const changeViewHandler = () => {
      if (postChild[0]) {
        setShowPostChild(!showPostChild);
      }
    }

    const handleSubmit = (text) => {
      const user = {
        name: 'Chheang',
      }
      
      const newObj = {
        content: text,
        by: user,
        date: new Date().getTime(),
      };

      setPostChild([...postChild, newObj]);
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
        <PostUtils handleSubmit={handleSubmit} handleChildViewer={changeViewHandler} buttonText={getBtnText()} isBtnless={true} />
        {Expander ? postChild.length > 0 ? <button onClick={changeViewHandler}>{`view ${postChild.length} ${childType}`}</button> : null : null}
        {showPostChild ? <Discussions discussions={postChild} /> : null}
      </div>
    )
  }
}

export default templatePost;