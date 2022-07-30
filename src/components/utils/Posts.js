import Post from "./Post";
import { v4 as uuidv4 } from 'uuid';

const Posts = ({posts}) => {
  return (
    <div>
      {posts.map((post) => <Post key={uuidv4()} discussion={post} />)}
    </div>
  )
};

export default Posts;