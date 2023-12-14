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
          <a href="#">GITHUB</a>
        </div>

        <p className={styles.description}>
          Sou um desenvolvedor frontend e desenvolvedor de jogos. Trabalho
          principalmente com React js e Unity.
        </p>
        <ul className={styles.info_list}>
          <li>Hithub</li>
          <li>Org</li>
          <li>Followers</li>
        </ul>
      </div>
    </div>
  );
}
