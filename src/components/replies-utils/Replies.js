import Reply from "./Reply";
import { v4 as uuidv4 } from 'uuid';


const Replies = ({replies}) => {
  if (replies.length === 0) {
    return null
  }
  return (
    <div>
      {replies.map((reply) => <Reply key={uuidv4()} replyContent={reply} />)}
    </div>
  )
}

export default Replies;