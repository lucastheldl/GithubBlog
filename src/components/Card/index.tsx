import styles from "./card.module.css"

export function Card(){
  return(
    <div className={styles.container}>
      <div className={styles.card_header}><strong className={styles.title}>Title</strong><span className={styles.date}>Datetime</span></div>
      <div className={styles.body}><p>Body</p></div>
    </div>
  )
}