const Image = ({className, testId, img, alt}) => {
  return (
    <img className={className ? className : null} data-testid={testId ? testId: null} src={img} alt={alt}></img>
  )
}

export default Image;