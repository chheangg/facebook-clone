const CircularButton = ({img, size, util, id}) => {
  const btnStyle = {
    borderRadius: '50%',
    height: size === 'big' ? '2.5rem' : '1.5rem',
    width: size === 'big' ? '2.5rem' : '1.5rem',
  }

  return (
    <button className='circular-btn btn' onClick={util ? util : null}>
      <img  id={id} style={btnStyle} src={img} alt='circular button'/>
    </button>
  )
}

export default CircularButton;