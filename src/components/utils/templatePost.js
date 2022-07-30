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
      if (postChild[1]) {
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
        time: new Date().getTime(),
      };

      setPostChild(postChild.concat(newObj));
      if (postChild[1]) {
        setShowPostChild(true);
      }
    }
    return (
      <div className={`${type}-container`} data-testid={type}>
        <Header user={discussion.by} />
        {discussion.date ? <div>{discussion.date}</div> : null}
        {discussion.content ? <div>{discussion.content} </div> : null}
        {discussion.img ? <Image src={discussion.img} alt={`${type} pic`} /> : null}
        <PostUtils handleSubmit={handleSubmit} handleChildViewer={changeViewHandler} buttonText={getBtnText()} isBtnless={true} />
        {Expander ? <button onClick={changeViewHandler}>{`view ${childType}`}</button> : null}
        {showPostChild ? <Discussions discussions={postChild} /> : 
        postChild[0] ? <Discussions discussions={[postChild[0]]} /> :
        null}
      </div>
    )
  }
}

export default templatePost;