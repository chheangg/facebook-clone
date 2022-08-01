const CircularButton = ({img, size, util}) => {
  const btnStyle = {
    borderRadius: '50%',
    height: size === 'big' ? '2.5rem' : '2rem',
    width: 'auto',
  }

  return (
    <button className='circular-btn btn' onClick={util ? util : null}>
      <img style={btnStyle} src={img} alt='circular button'/>
    </button>
  )
}

export default CircularButton;