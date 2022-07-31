import { Link } from "react-router-dom";

const NavButton = ({isSelected, img, path}) => {
  const imgStyle = {
    height: '2rem',
    width: 'auto',
  }
  if (!path) {
    return (
      <button className='nav-button btn'>
        <img style={imgStyle} src={img} alt='nav button'></img>
      </button>
    )
  }
  return (
    <Link to={path} className='nav-button btn'>
      <img style={imgStyle} src={img} alt='nav button'></img>
    </Link>
  )
}

export default NavButton;