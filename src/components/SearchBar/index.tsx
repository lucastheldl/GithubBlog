import { useForm } from "react-hook-form";
import styles from "./SearchBar.module.css";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchBarProps {
  publicationAmount: number;
}
const searchFormSchema = z.object({
  search: z.string(),
});
type searchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchBar({ publicationAmount }: SearchBarProps) {
  const { register, handleSubmit } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });
  const [search, setSearch] = useState("");

  function handleSearch(data: searchFormInputs) {}

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
