import { addDoc, query, orderBy, limit, getDocs } from "firebase/firestore";

const addPost = async (post, ref) => {
  const postRef = await addDoc(ref, post)
  return postRef.id;
}

const fetchPosts = async (type, ref) => {
  if (type === 'post') {
    return []
  }
  const newPosts = []
  const postsQuery = query(ref, orderBy('date'), type === 'home' ? limit(12) : limit(25));
  const posts = await getDocs(postsQuery);
  posts.forEach((post) => {
    const newPost = {...post.data(), id: post.id};
    newPosts.push(newPost);
  })
  return newPosts;
}

export { addPost, fetchPosts };

