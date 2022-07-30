import ProfileHeader from "./ProfileHeader"
import Comments from "../comments-utils/Comments";
import templatePost from "./templatePost";

const Post = templatePost('post', ProfileHeader, Comments, 'comments', false);

export default Post;