import Comment from './Comment';

const Comments = ({discussions, updateDiscussions, parentId}) => {
	if (discussions.length === 0) {
		return null;
	}

	const updateDiscussion = (type, newChild, index) => {
		const newDiscussions = [...discussions];
		newDiscussions[index][type] = newChild;
		updateDiscussions(newDiscussions);
	}

	return (
		<div className='comments-container'>
			{discussions.map((comment, index) => {
				return (
					<Comment key={comment.id} 
						parentId={parentId}
						id={comment.id}
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