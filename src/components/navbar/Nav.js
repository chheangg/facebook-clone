
import './styles/nav.scss';
import CircularButton from "../utils/CircularButton";
import fbLogo from '../assets/fb_icon_325x325.png';
import dotGrid from '../assets/dots-grid.svg';
import messLogo from '../assets/facebook-messenger.svg';
import bellIcon from '../assets/bell.svg';
import homeIcon from '../assets/home.svg';
import NavButton from "./NavButton";
import friendIcon from '../assets/account-multiple.svg';
import watchIcon from '../assets/television.svg';
import groupIcon from '../assets/account-group.svg';
import gameIcon from '../assets/facebook-gaming.svg';
import SearchBar from './SearchBar';
import defaultProfileIcon from '../assets/default-profile-icon-24.jpg';

const Nav = ({changeMessageView, handleProfileSetting, user}) => {
  return (
    <nav className='nav-container'>
        <div className='left-nav-container nav-child'>
          <CircularButton size='big' img={fbLogo} />
          <SearchBar />
        </div>
        <div className='mid-nav-container nav-child'>
          <NavButton img={homeIcon} path='/' />
          <NavButton img={friendIcon} />
          <NavButton img={watchIcon} />
          <NavButton img={groupIcon} />
          <NavButton img={gameIcon} />
        </div>
        <div className='right-nav-container nav-child'>
          <CircularButton size='mid' img={dotGrid} />  
          <CircularButton size='mid' img={messLogo} util={changeMessageView} /> 
          <CircularButton size='mid' img={bellIcon} />  
          <CircularButton size='mid' img={user ? user.img : defaultProfileIcon} util={handleProfileSetting} /> 
        </div>
    </nav>
  )
}

export default Nav;