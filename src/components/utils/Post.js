import { useState } from "react";
import ProfileHeader from "./ProfileHeader"
import Image from "./Image";
import ProtoPost from "./ProtoPost";
import Comments from "../comments-utils/Comments";
import PostUtils from "./PostUtils";

const Post = ({postContent}) => {
  const [showCmt, setShowCmt] = useState(false);
  const [comments, setComments] = useState(postContent.comments ? postContent.comments : []);

  const changeViewHandler = () => {
    if (comments[1]) {
      setShowCmt(!showCmt);
    }
  }

  const handleSubmit = (text) => {
    const user = {
      name: 'Chheang',
    }
    
    const commentObj = {
      content: text,
      by: 'Chheang',
      time: new Date().getTime(),
    };

    setComments(comments.concat(commentObj));
    if (comments[1]) {
      setShowCmt(true);
    }
  }

  return (
    <ProtoPost >
      <ProfileHeader user={postContent.by} />
      <div>{postContent.date}</div>
      {postContent.content ? <div>{postContent.content}</div> : null}
      {postContent.img ? <Image alt='post pic' img={postContent.img} /> : null}
      <PostUtils handleSubmit={handleSubmit} handleChildViewer={changeViewHandler} buttonText='comment' isBtnless={true} />
      {showCmt ? <Comments comments={comments} /> : comments[0] ? <Comments comments={[comments[0]]} /> : null}
    </ProtoPost>
  )
}

export default Post;