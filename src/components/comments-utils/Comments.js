import Comment from './Comment';
import { useState } from 'react';

const Comments = ({discussions, updateDiscussions, parentId}) => {
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
			{discussions.map((comment, index) => {
				return (
					<Comment key={comment.id} 
						parentId={parentId}
						id={comment.id}
						showPostChild={showPostChild} 
						setShowPostChild={setShowPostChild} 
						discussion={comment} 
						index={index} 
						updateDiscussion={updateDiscussion}
					/> 
				)
				})        
			}
		</div>
	)
}

export default Comments;