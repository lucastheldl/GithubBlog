import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import styles from "./ProfileCard.module.css";

export function ProfileCard() {
  return (
    <div className={styles.card}>
      <img
        src={
          "https://i.pinimg.com/564x/de/11/50/de11509d4515e382fbe1047ccab8f569.jpg"
        }
        height={150}
        width={150}
      />
      <div className={styles.informations}>
        <div className={styles.header}>
          <h2>Lucas Emanoel</h2>
          <a href="https://github.com/lucastheldl" target="blank">
            GITHUB
            <ArrowSquareOut size={18} />
          </a>
        </div>

        <p className={styles.description}>
          Sou um desenvolvedor frontend e desenvolvedor de jogos. Trabalho
          principalmente com React js e Unity.
        </p>
        <ul className={styles.info_list}>
          <li>
            <GithubLogo size={18} />
            Github
          </li>
          <li>
            <Buildings size={18} />
            Org
          </li>
          <li>
            <Users size={18} />
            Followers
          </li>
        </ul>
      </div>
    </div>
  );
}
