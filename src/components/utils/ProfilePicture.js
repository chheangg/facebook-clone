import { Link } from "react-router-dom";
import defaultImg from '../assets/default-loading-image.png';

const ProfilePicture = ({user}) => {
  const imgStyle = {
    height: '2rem',
    width: '2rem',
    borderRadius: '50%',
  }
  return (
    <Link className='icon profile-img' to={`/profile/${user.name}`}>
      <img style={imgStyle} className='icon'  src={user.img || defaultImg} alt='profile pic'></img>
    </Link>
  )
}

export default ProfilePicture;