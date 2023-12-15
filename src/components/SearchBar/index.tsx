import styles from "./SearchBar.module.css";

interface SearchBarProps {
  publicationAmount: number;
}

export function SearchBar({ publicationAmount }: SearchBarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.publications_info}>
        <strong className={styles.publication_label}>Publicações</strong>
        <span className={styles.publication_amount}>
          {publicationAmount} publicações
        </span>
      </div>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        className={styles.search_bar}
      />
    </div>
  );
}
