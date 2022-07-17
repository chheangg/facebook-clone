import ProtoPost from "../utils/ProtoPost";
import Image from "../utils/Image";

const Message = ({user, message}) => {
  const checkUser = () => message.by === user.name ? 'left' : 'right';

  return (
    <ProtoPost>
      {message.text ? <p data-testid={checkUser()} className={checkUser()}>{message.text}</p> : null }
      {message.img ? <Image testId={checkUser()} className={checkUser()} img={message.img} alt='chat pic' /> : null}
    </ProtoPost>
  )
}

export default Message;