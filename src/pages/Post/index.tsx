import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Post.module.css";
import { PostHeader } from "../../components/PostHeader";

interface Issue {
  number: number;
  title: string;
  body: string;
  url: string;
}

export function Post() {
  const { id } = useParams();

  const [issue, setIssue] = useState<Issue | null>(null);

  async function getIssueData() {
    await fetch(
      `https://api.github.com/repos/lucastheldl/GithubBlog/issues/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIssue(data);
        console.log(data);
      });
  }

  useEffect(() => {
    getIssueData();
  }, []);

  return (
    <>
      {issue && (
        <div className={styles.wrapper}>
          <PostHeader title={issue.title} link={issue.url} />
          <div className={styles.posts_container}>{issue.body}</div>
        </div>
      )}
    </>
  );
}
