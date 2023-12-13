import styles from "./Home.module.css"
//components
import { Card } from "../../components/Card"
import { ProfileCard } from "../../components/ProfileCard"
import { SearchBar } from "../../components/SearchBar"
//images
import cover from "../../assets/Covercover.png"

export function Home(){
  return(
    <>
        <img src={cover} className={styles.cover}/>
        <div className={styles.wrapper}>
          <ProfileCard/>
          <SearchBar/>
        <div className={styles.posts_container}><Card/><Card/><Card/><Card/><Card/><Card/></div>
    
      </div>
    </>
  )
}