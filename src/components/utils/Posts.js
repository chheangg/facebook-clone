import Post from "./Post";
import { v4 as uuidv4 } from 'uuid';

const Posts = ({discussions}) => {
  return (
    <div>
      {discussions ? discussions[0] ? discussions.map((post) => <Post key={uuidv4()} discussion={post} />) : "It's Empty!" : "It's Empty!"}
    </div>
  )
};

export default Posts;