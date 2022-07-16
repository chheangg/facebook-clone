import defaultImg from '../assets/default-loading-image.png';
import ProfilePicture from './ProfilePicture';

const ProfileHeader = ({user}) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <ProfilePicture src={user.img ? user.img : defaultImg} />
    </div>
  )
}

export default ProfileHeader;