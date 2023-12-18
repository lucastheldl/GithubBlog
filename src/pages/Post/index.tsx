import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Issue {
  number: number;
  title: string;
  body: string;
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

  return <>{issue && <h1>{issue.title}</h1>}</>;
}
