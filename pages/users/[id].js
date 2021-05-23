import { useRouter } from "next/router";
import styles from "../../styles/user.module.scss";

export default function User() {
  const { query } = useRouter(); // get user
  return (
    <div className={styles.user}>
      <h1>User {query.id}</h1>
    </div>
  );
}
