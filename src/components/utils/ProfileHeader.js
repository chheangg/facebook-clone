import defaultImg from '../assets/default-loading-image.png';
import ProfilePicture from './ProfilePicture';

const ProfileHeader = ({user}) => {
  return (
    <div>
      <ProfilePicture img={user.img ? user.img : defaultImg} />
      <div data-testid='username'>{user.name}</div>
    </div>
  )
}

export default ProfileHeader;