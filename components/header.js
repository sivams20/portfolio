import Image from "next/image";
import styles from "../styles/Header.module.css";
import Navbar from "./navbar";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.picsection}>
        <Image
          src="https://sivams20.github.io/portfolio/pic.jpeg"
          alt=""
          width="50"
          height="50"
          className={styles.img}
        />
        <Link href="/" className={styles.nav}>
          Baluraj
        </Link>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
