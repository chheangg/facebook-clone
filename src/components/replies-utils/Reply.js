import ProfileHeader from "../utils/ProfileHeader";
import Image from "../utils/Image";

const Reply = ({discussion}) => {
  return (
    <div className='reply-container' data-testid='reply'>
      <ProfileHeader user={discussion.by} />
      {discussion.content ? <div>{discussion.content}</div> : null}
      {discussion.img ? <Image img={discussion.img} alt='reply pic' /> : null}
    </div>
  )
}

export default Reply;