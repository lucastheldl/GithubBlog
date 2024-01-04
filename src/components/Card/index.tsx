import { Link } from "react-router-dom";
import styles from "./card.module.css";

interface CardProps {
  issue: { number: number; title: string; body: string };
}
export function Card({ issue }: CardProps) {
  const updatedBody = issue.body.split("**").join("").replace("###", "");
  return (
    <Link to={`/GithubBlog/posts/${issue.number}`} className={styles.container}>
      <div className={styles.card_header}>
        <strong className={styles.title}>{issue.title}</strong>
        <span className={styles.date}>Datetime</span>
      </div>
      <div className={styles.body}>
        <p>{updatedBody.substring(0, 235) + "..."}</p>
      </div>
    </Link>
  );
}
