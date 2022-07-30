import defaultImg from '../assets/default-loading-image.png';
import ProfilePicture from './ProfilePicture';

const ProfileHeader = ({user}) => {
  return (
    <div>
      <div data-testid='username'>{user.name}</div>
      <ProfilePicture src={user.img ? user.img : defaultImg} />
    </div>
  )
}

export default ProfileHeader;