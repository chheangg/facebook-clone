import ProfileHeader from "../utils/ProfileHeader"
import Replies from "../replies-utils/Replies"
import templatePost from "../utils/templatePost"

const Comment = templatePost('comment', ProfileHeader, Replies, 'replies', true)

export default Comment;