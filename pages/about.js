import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          Hi, I&apos;m Baluraj, a passionate Software Engineer!
        </h3>
        <p>
          I live in India. I&apos;m a software engineer with 10 years of
          experience.I&apos;m specialized in Frontend development. I&apos;ve
          worked for different clients, different domains throughout my career I
          currently work for Tech Mahindra as a senior Frontend developer.
        </p>
        <p>
          I am passionate about learning new technologies, sharing tech
          knowledge.
        </p>
      </div>
      <div className={styles.skills}>Skills section</div>
    </div>
  );
}
export default About;
