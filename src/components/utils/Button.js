const Button = ({img, func, text}) => {
  return (
    <div>
      {img ? <img alt='button' src={img}></img> : null}
      <button onClick={() => func()}>{text}</button>
    </div>
  )
}

export default Button;