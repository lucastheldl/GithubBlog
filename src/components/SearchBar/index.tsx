import { useForm } from "react-hook-form";
import styles from "./SearchBar.module.css";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchBarProps {
  publicationAmount: number;
  searchIssue: (data: searchFormInputs) => void;
}
const searchFormSchema = z.object({
  search: z.string(),
});
type searchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchBar({ publicationAmount, searchIssue }: SearchBarProps) {
  const { register, handleSubmit } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearch(data: searchFormInputs) {
    searchIssue({ search: data.search });
  }

  return (
    <div className={styles.container}>
      <div className={styles.publications_info}>
        <strong className={styles.publication_label}>Publicações</strong>
        <span className={styles.publication_amount}>
          {publicationAmount} publicações
        </span>
      </div>

      <form onSubmit={handleSubmit(handleSearch)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          className={styles.search_bar}
          {...register("search")}
        />
      </form>
    </div>
  );
}
