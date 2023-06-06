const { default: Link } = require("next/link");
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div>
      <Link href="/about" className={styles.navitem}>
        About
      </Link>
      <Link href="/resume" className={styles.navitem}>
        Resume
      </Link>
    </div>
  );
}

export default Navbar;
