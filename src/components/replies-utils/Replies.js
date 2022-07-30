import Reply from "./Reply";
import { v4 as uuidv4 } from 'uuid';


const Replies = ({discussions}) => {
  if (discussions.length === 0) {
    return null
  }
  return (
    <div>
      {discussions.map((reply) => <Reply key={uuidv4()} replyContent={reply} />)}
    </div>
  )
}

export default Replies;