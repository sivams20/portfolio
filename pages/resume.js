import styles from "../styles/Resume.module.css";

function Resume() {
  return (
    <div className={styles.container}>
      <h3 className={styles.content}>
        If you find good opportunity for me? Here is my resume
      </h3>
      <button className={styles.btn}>
        <a className={styles.link} download href="Balu.pdf">
          Resume
        </a>
      </button>
    </div>
  );
}
export default Resume;
