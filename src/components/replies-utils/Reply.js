import ProfileHeader from "../utils/ProfileHeader";
import Image from "../utils/Image";
import ProfilePicture from "../utils/ProfilePicture";
import { Link } from "react-router-dom";

const Reply = ({discussion}) => {
  return (
    <div className='main-reply-container' data-testid='reply'>
      <ProfilePicture user={discussion.by} />
      <div className='reply-container'>
        <Link to={`/profile/${discussion.by.id}`} className='username' data-testid='username'>{discussion.by.name}</Link>
        {discussion.content ? <div className='content-container'>{discussion.content} </div> : null}
        {discussion.img ? <Image src={discussion.img} alt='replies' /> : null}
      </div>
    </div>
  )
}

export default Reply;