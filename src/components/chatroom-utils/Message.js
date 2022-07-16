const Message = ({user, message}) => {
  const checkUser = () => message.by === user.name ? 'left' : 'right';

  if (message.img) {
    return (
      <img src={message.img} data-testid={checkUser()} className={checkUser()} alt='Chat pic'></img>
    )
  }

  return (
    <p data-testid={checkUser()} className={checkUser()} >
      {message.text} 
    </p>
  )
}

export default Message;