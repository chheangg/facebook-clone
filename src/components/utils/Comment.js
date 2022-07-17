import ProfileHeader from "./ProfileHeader"
import Image from "./Image"
import ProtoPost from "./ProtoPost"

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