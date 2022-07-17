import Post from "./Post";
import { v4 as uuidv4 } from 'uuid';

const Posts = ({posts}) => {
  return (
    <div>
      {posts.map((post) => <Post key={uuidv4()} postContent={post} />)}
    </div>
  )
};

export default Posts;