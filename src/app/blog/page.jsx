import PostCard from "@/components/postCard/Postcard";
import styles from "./blog.module.css";

// FETCH DATA WITH AN API
// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate:3600}});
//   if(!response.ok) {
//     throw new Error("Something went wrong!");
//   }

//   const data = await response.json();
//   return data;
// }

const BlogPage = async () => {

  // const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map(post =>(
      <div className={styles.post} key={post.id}>
        <PostCard post={post}/>
      </div>

      ))}
      
    </div>
  );
};

export default BlogPage;
