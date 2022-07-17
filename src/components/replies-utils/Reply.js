import ProfileHeader from "../utils/ProfileHeader";
import ProtoPost from "../utils/ProtoPost";
import Image from "../utils/Image";

const Reply = ({replyContent}) => {
  return (
    <ProtoPost testId='reply'>
      <ProfileHeader user={replyContent.by} />
      {replyContent.content ? <div>{replyContent.content}</div> : null}
      {replyContent.img ? <Image img={replyContent.img} alt='reply pic' /> : null}
    </ProtoPost>
  )
}

export default Reply;