import Post from "./Post";
import { useState } from "react";

const Posts = ({discussions, updateDiscussions}) => {
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