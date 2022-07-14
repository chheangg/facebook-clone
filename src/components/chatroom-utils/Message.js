/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
const Message = ({user, message}) => {
  const checkUser = () => message.by === user ? 'left' : 'right';

  if (message.img) {
    return (
      <img src={message.img} data-testid={checkUser()} className={checkUser()}></img>
    )
  }

  return (
    <p data-testid={checkUser()} className={checkUser()} >
      {message.text} 
    </p>
  )
}

export default Message;