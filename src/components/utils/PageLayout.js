import { useState, useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const pageLayout = (Header, Discussions) => {
  return ({discussions}) => {
    const [post, setPosts] = useState(discussions ? discussions : []);
    const user = useContext(UserContext);

    const handleSubmit = (text) => {
      const newObj = {
        content: text,
        by: user,
        date: new Date().getTime(),
      };

      setPosts([...post, newObj]);
    };

    const updateState = (newPost) => {
      setPosts(newPost)
    }
    return (
      <div>
        <Header handleSubmit={handleSubmit}/>
        <Discussions discussions={post} updateDiscussions={updateState} />
      </div>
    )
  }
}

export default pageLayout;