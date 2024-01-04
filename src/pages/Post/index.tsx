import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Post.module.css";
import { PostHeader } from "../../components/PostHeader";
import Markdown from "react-markdown";

interface Issue {
  number: number;
  title: string;
  body: string;
  url: string;
  created_at: string;
}
interface UserType {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
}

export function Post() {
  const { id } = useParams();

  const [issue, setIssue] = useState<Issue | null>(null);
  const [user, setUser] = useState<UserType | null>();

  useEffect(() => {
    async function getUser() {
      await fetch(`https://api.github.com/users/lucastheldl`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
    getUser();
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

    getIssueData();
  }, [id]);

  return (
    <>
      {issue && (
        <div className={styles.wrapper}>
          {user && (
            <PostHeader
              title={issue.title}
              login={user.login}
              followers={user.followers}
              dateTime={issue.created_at}
            />
          )}

          <Markdown className={styles.posts_container}>{issue.body}</Markdown>
        </div>
      )}
    </>
  );
}
