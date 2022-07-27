import { v4 as uuidv4 } from 'uuid';
import Comment from './Comment';

const Comments = ({comments}) => {
    if (comments.length === 0) {
        return null;
    }
    return (
        <div>
            {comments.map((comment) => <Comment key={uuidv4()} commentContent={comment} />)}
        </div>
    )
}

export default Comments;