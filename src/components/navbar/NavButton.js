const NavButton = ({isSelected, img}) => {
  const imgStyle = {
    height: '2rem',
    width: 'auto',
  }
  return (
    <button className='nav-button btn'>
      <img style={imgStyle} src={img} alt='nav button'></img>
    </button>
  )
}

export default NavButton;