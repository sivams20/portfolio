import styles from "../styles/Header.module.css";
import Navbar from "./navbar";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.picsection}>
        <img className={styles.img} src="pic.jpeg" />
        <a href="" className={styles.nav}>
          Baluraj
        </a>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
