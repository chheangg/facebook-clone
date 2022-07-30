const CircularButton = ({img, size}) => {
  const btnStyle = {
    borderRadius: '50%',
    height: size === 'big' ? '2.5rem' : '2rem',
    width: 'auto',
  }

  return (
    <button className='circular-btn btn'>
      <img style={btnStyle} src={img} alt='circular button'/>
    </button>
  )
}

export default CircularButton;