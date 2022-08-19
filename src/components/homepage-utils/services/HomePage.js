import { addDoc, query, orderBy, limit, getDocs, where } from "firebase/firestore";

const addPost = async (post, ref) => {
  const postRef = await addDoc(ref, post)
  return postRef.id;
}

const fetchPosts = async (type, ref, profileId) => {
  const newPosts = [];
  let postsQuery;
  if (type === 'profile') {
    postsQuery = query(ref, orderBy('date'), limit(12), where('by.id', '==', profileId));
  } else {
    postsQuery = query(ref, orderBy('date'), type === 'home' ? limit(12) : limit(25));
  }
  const posts = await getDocs(postsQuery);
  posts.forEach((post) => {
    const newPost = {...post.data(), id: post.id};
    newPosts.push(newPost);
  })
  return newPosts;
}

export { addPost, fetchPosts };

