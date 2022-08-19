import Post from "./Post";
import './styles/Post.scss';
import { useState } from "react";

const Posts = ({discussions, updateDiscussions}) => {
  const [showPostChild, setShowPostChild] = useState(false);

  const updateDiscussion = (type, newChild, index) => {
    const newDiscussions = [...discussions];
    newDiscussions[index][type] = newChild;
    updateDiscussions(newDiscussions);
  }
  return (
    <div className='posts-container'>
      {discussions ? discussions[0] ? discussions.map((post, index) => { 
        return (
          <Post 
          parentId={'posts'} 
          id={post.id}
          showPostChild={showPostChild} 
          setShowPostChild={setShowPostChild} 
          key={post.id} 
          index={index} 
          discussion={post} 
          updateDiscussion={updateDiscussion} /> 
        ) 
        }) : "It's Empty!" : "It's Empty!"
      }
    </div>
  )
};

export default Posts;