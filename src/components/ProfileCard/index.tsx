import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  avatar: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
}

export function ProfileCard({
  avatar,
  name,
  login,
  bio,
  followers,
}: ProfileCardProps) {
  return (
    <div className={styles.card}>
      <img src={avatar} height={150} width={150} />
      <div className={styles.informations}>
        <div className={styles.header}>
          <h2>{name}</h2>
          <a href="https://github.com/lucastheldl" target="blank">
            GITHUB
            <ArrowSquareOut size={18} />
          </a>
        </div>

        <p className={styles.description}>{bio}</p>
        <ul className={styles.info_list}>
          <li>
            <GithubLogo size={18} />
            {login}
          </li>
          <li>
            <Buildings size={18} />
            Org
          </li>
          <li>
            <Users size={18} />
            {followers} seguidores
          </li>
        </ul>
      </div>
    </div>
  );
}
