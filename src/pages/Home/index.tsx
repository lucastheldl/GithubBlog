import { useEffect, useState } from "react";
import styles from "./Home.module.css";
//components
import { Card } from "../../components/Card";
import { ProfileCard } from "../../components/ProfileCard";
import { SearchBar } from "../../components/SearchBar";
//images
import cover from "../../assets/Covercover.png";

interface UserType {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
}
export function Home() {
  const [user, setUser] = useState<UserType | null>();

  async function getUser() {
    await fetch(`https://api.github.com/users/lucastheldl`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <img src={cover} className={styles.cover} />
      <div className={styles.wrapper}>
        {user && (
          <ProfileCard
            avatar={user.avatar_url}
            name={user.name}
            followers={user.followers}
            login={user.login}
            bio={user.bio}
          />
        )}
        <SearchBar />
        <div className={styles.posts_container}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
