
import ProfilePicture from './ProfilePicture';
import { Link } from 'react-router-dom';

const ProfileHeader = ({user, date, metadata}) => {
  return (
    <div className='profile-header-container'>
      <ProfilePicture user={user} />
      <Link to={`/profile/${user.name}`} data-testid='username'>{user.name}</Link>
      {date ? <div>{date}</div> : null}
      {metadata ? <div>{metadata}</div> : null}
    </div>
  )
}

export default ProfileHeader;