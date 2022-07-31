import { useState } from "react";

const pageLayout = (Header, Discussions) => {
  return ({discussions}) => {
    const [post, setPosts] = useState(discussions ? discussions : []);
    const handleSubmit = (text) => {
      const user = {
        name: 'Chheang',
      }
      
      const newObj = {
        content: text,
        by: user,
        date: new Date().getTime(),
      };

      setPosts([...post, newObj]);
      console.log(post)
    };
    return (
      <div>
        <Header handleSubmit={handleSubmit}/>
        <Discussions discussions={post}/>
      </div>
    )
  }
}

export default pageLayout;