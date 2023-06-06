import styles from "../styles/Resume.module.css";

function Resume() {
  return (
    <div className={styles.container}>
      <h3 className={styles.content}>
        If you find good opportunity for me? Here is my resume
      </h3>
      <a download href="Balu.pdf">
        Resume
      </a>
    </div>
  );
}
export default Resume;
