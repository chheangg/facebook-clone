import ProfileHeader from "../utils/ProfileHeader"
import Image from "../utils/Image"
import ProtoPost from "../utils/ProtoPost"

const Comment = ({commentContent}) => {
  return (
    <ProtoPost>
      <ProfileHeader user={commentContent.by} />
      {commentContent.content ? <div>{commentContent.content}</div> : null}
      {commentContent.img ? <Image img={commentContent.img} alt='comment pic' /> : null}
    </ProtoPost>
  )
}

export default Comment;