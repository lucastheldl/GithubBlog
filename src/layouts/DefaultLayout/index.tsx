import styles from "./DefaultLayout.module.css";
import cover from "../../assets/Covercover.png";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div>
      <img src={cover} className={styles.cover} />
      <Outlet />
    </div>
  );
}
