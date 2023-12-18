import { Link } from "react-router-dom";
import styles from "./card.module.css";

interface CardProps {
  issue: { id: number; title: string; body: string };
}
export function Card({ issue }: CardProps) {
  return (
    <Link to={"/GithubBlog/posts/2"} className={styles.container}>
      <div className={styles.card_header}>
        <strong className={styles.title}>{issue.title}</strong>
        <span className={styles.date}>Datetime</span>
      </div>
      <div className={styles.body}>
        <p>{issue.body.substring(0, 235) + "..."}</p>
      </div>
    </Link>
  );
}
