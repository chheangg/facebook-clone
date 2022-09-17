
import ProfilePicture from './ProfilePicture';
import { Link } from 'react-router-dom';

const ProfileHeader = ({user, date, metaData}) => {
  return (
    <div className='profile-header-container'>
      <ProfilePicture user={user} />
      <Link to={`/profile/${user.id}`} className='username' data-testid='username'>{user.name}</Link>
      {date ? <div className='date'>{date}</div> : null}
      {metaData ? <div>{metaData}</div> : null}
    </div>
  )
}

export default ProfileHeader;