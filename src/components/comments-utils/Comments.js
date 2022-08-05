import { v4 as uuidv4 } from 'uuid';
import Comment from './Comment';
import { useState } from 'react';

const Comments = ({discussions, updateDiscussions}) => {
    const [showPostChild, setShowPostChild] = useState(false);

    if (discussions.length === 0) {
        return null;
    }

    const updateDiscussion = (type, newChild, index) => {
        const newDiscussions = [...discussions];
        newDiscussions[index][type] = newChild;
        updateDiscussions(newDiscussions);
    }

    return (
        <div>
            {discussions.map((comment, index) => <Comment key={uuidv4()} showPostChild={showPostChild} setShowPostChild={setShowPostChild} discussion={comment} index={index} updateDiscussion={updateDiscussion}/>)}
        </div>
    )
}

export default Comments;