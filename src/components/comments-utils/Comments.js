import { v4 as uuidv4 } from 'uuid';
import Comment from './Comment';

const Comments = ({discussions}) => {
    if (discussions.length === 0) {
        return null;
    }
    return (
        <div>
            {discussions.map((comment) => <Comment key={uuidv4()} discussion={comment} />)}
        </div>
    )
}

export default Comments;