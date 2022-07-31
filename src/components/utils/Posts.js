import Post from "./Post";
import './styles/Post.scss';
import { v4 as uuidv4 } from 'uuid';

const Posts = ({discussions}) => {
  return (
    <div className='posts-container'>
      {discussions ? discussions[0] ? discussions.map((post) => <Post key={uuidv4()} discussion={post} />) : "It's Empty!" : "It's Empty!"}
    </div>
  )
};

export default Posts;