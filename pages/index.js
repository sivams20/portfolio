import Image from "next/image";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Image
        src="/pic.jpeg"
        alt=""
        className={styles.img}
        width="250"
        height="250"
      />
      <h3 className={styles.title}>Baluraj</h3>
      <h2>Software Engineer - Frontend lead developer</h2>
    </div>
  );
}
export default Home;
