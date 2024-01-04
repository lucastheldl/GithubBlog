import {
  ArrowLeft,
  ArrowSquareOut,
  Calendar,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import styles from "./PostHeader.module.css";
import { Link } from "react-router-dom";
import { differenceInMinutes, formatDistance, subMinutes } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostHeaderProps {
  title: string;
  login: string;
  followers: number;
  dateTime: string;
}

export function PostHeader({
  title,
  login,
  followers,
  dateTime,
}: PostHeaderProps) {
  const dateDifference = differenceInMinutes(new Date(), new Date(dateTime));

  const date = formatDistance(
    subMinutes(new Date(), dateDifference),
    new Date(),
    {
      addSuffix: true,
      locale: ptBR,
    }
  );

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
          {login}
        </li>
        <li>
          <Calendar size={18} />
          {date}
        </li>
        <li>
          <Users size={18} />
          {followers} seguidores
        </li>
      </ul>
    </div>
  );
}
