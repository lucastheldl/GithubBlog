import {
  ArrowLeft,
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import styles from "./PostHeader.module.css";
import { Link } from "react-router-dom";

interface PostHeaderProps {
  title: string;
  //login: string;
  //followers: number;
  link: string;
}

export function PostHeader({ title, link }: PostHeaderProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Link to="/GithubBlog/">
          <ArrowLeft size={18} />
          VOLTAR
        </Link>
        <a
          href="https://github.com/lucastheldl/GithubBlog/issues"
          target="blank"
        >
          VER NO GITHUB
          <ArrowSquareOut size={18} />
        </a>
      </div>
      <h2>{title}</h2>
      <ul className={styles.info_list}>
        <li>
          <GithubLogo size={18} />
        </li>
        <li>
          <Buildings size={18} />
          Org
        </li>
        <li>
          <Users size={18} />
          seguidores
        </li>
      </ul>
    </div>
  );
}
