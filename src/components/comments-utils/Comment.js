import ProfileHeader from "../utils/ProfileHeader"
import Image from "../utils/Image"
import ProtoPost from "../utils/ProtoPost"
import Replies from "../replies-utils/Replies"
import PostUtils from "../utils/PostUtils"
import { useState } from "react"

const Comment = ({commentContent}) => {
  const [showReply, setShowReply] = useState(false);
  const [replies, setReplies] = useState(commentContent.replies ? commentContent.replies : []);

  const changeViewHandler = () => {
    if (replies[1]) {
      setShowReply(!showReply);
    }
  };
  const handleSubmit = (text) => {
    const user = {
      name: 'Chheang',
    }
    
    const replyObj = {
      content: text,
      by: user,
      time: new Date().getTime(),
    };

    setReplies(replies.concat(replyObj));
    if (replies[1]) {
      setShowReply(true);
    }
  }

  return (
    <ProtoPost testId='comment'>
      <ProfileHeader user={commentContent.by} />
      {commentContent.content ? <div>{commentContent.content}</div> : null}
      {commentContent.img ? <Image img={commentContent.img} alt='comment pic' /> : null}
      <PostUtils handleSubmit={handleSubmit} isBtnless={true} buttonText='reply' />
      <button onClick={changeViewHandler}>view replies</button>
      {showReply ? <Replies replies={replies} /> : replies[0] ? <Replies replies={[replies[0]]} /> : null}
    </ProtoPost>
  )
}

export default Comment;