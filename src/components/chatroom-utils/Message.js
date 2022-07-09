const Message = ({user, message}) => {
  return (
    <p data-testid={message.by === user ? 'left' : 'right'} 
    className={message.by === user ? 'left' : 'right'} >
      {message.text} 
    </p>
  )
}

export default Message;