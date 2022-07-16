import ProfileHeader from "./ProfileHeader"
import Image from "./Image";

const Post = ({postContent}) => {
  return (
    <div>
      <ProfileHeader user={postContent.by} />
      <div>
        {postContent.date}
      </div>
      <div>
        {postContent.content}
      </div>
      {postContent.img ? <Image img={postContent.img} /> : null}
    </div>
  )
}

export default Post;