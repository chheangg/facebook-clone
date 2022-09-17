
import Image from "../utils/Image";

const Message = ({discussion}) => {
  return (
    <div className='message-container' data-testid='message'>
      {discussion.content ? <div>{discussion.content}</div> : null}
      {discussion.img ? <Image img={discussion.img} alt='message pic' /> : null}
    </div>
  )
}

export default Message;