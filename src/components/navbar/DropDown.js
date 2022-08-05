const DropDown = ({children}) => {
  const dropDownStyle = {
    position: 'absolute',
    top: '2rem',
    right: '1.5rem',
  }

  return (
    <div style={dropDownStyle}>
      {children}
    </div>
  )
}

export default DropDown;