import Image from "next/image";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Image src="pic.jpeg" className={styles.img} />
      <h3 className={styles.title}>Baluraj</h3>
      <h2>Software Engineer - Frontend lead developer</h2>
    </div>
  );
}
export default Home;
