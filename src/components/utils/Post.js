import ProfileHeader from "./ProfileHeader"
import Image from "./Image";
import ProtoPost from "./ProtoPost";

const Post = ({postContent}) => {
  return (
    <ProtoPost >
      <ProfileHeader user={postContent.by} />
      <div>{postContent.date}</div>
      {postContent.content ? <div>{postContent.content}</div> : null}
      {postContent.img ? <Image alt='post pic' img={postContent.img} /> : null}
    </ProtoPost>
  )
}

export default Post;