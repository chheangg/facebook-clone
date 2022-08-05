import Reply from "./Reply";
import { v4 as uuidv4 } from 'uuid';


const Replies = ({discussions, updateDiscussions}) => {
  if (discussions.length === 0) {
    return null
  }
  return (
    <div>
      {discussions.map((reply) => <Reply key={uuidv4()} discussion={reply} updateDiscussions={updateDiscussions} />)}
    </div>
  )
}

export default Replies;