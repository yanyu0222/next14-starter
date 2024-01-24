import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {
//       cache: "no-store"
//     }
//   );
//   if (!response.ok) {
//     throw new Error("Something went wrong!");
//   }

//   const data = await response.json();
//   return data;
// };

const PostUser = async ({ userId }) => {
  // FETCH DATA WITH AN API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
};

export default PostUser;
