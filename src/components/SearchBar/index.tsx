import styles from "./SearchBar.module.css"

export function SearchBar(){
  return(
    <div className={styles.container}>
      <div className={styles.publications_info}>
        <strong className={styles.publication_label}>Publicações</strong>
        <span className={styles.publication_amount}>0 publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" className={styles.search_bar}/>
    </div>
  )
}