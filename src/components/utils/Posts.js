import Post from "./Post";

const Posts = ({posts}) => {
  return (
    <div>
      {posts.map((post) => <Post postContent={post} />)}
    </div>
  )
};

export default Posts;