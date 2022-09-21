import { Link } from "react-router-dom";
import defaultImg from '../assets/default-loading-image.png';

const ProfilePicture = ({user}) => {
  return (
    <Link className='icon profile-img' to={`/profile/${user.id }`}>
      <img className='icon'  src={user.img || defaultImg} alt='profile pic'></img>
    </Link>
  )
}

export default ProfilePicture;