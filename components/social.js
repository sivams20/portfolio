import styles from "../styles/Social.module.css";

function Social() {
  return (
    <div className={styles.media}>
      <a href="https://www.linkedin.com/in/baluraj-s-38326573/" target="_blank">
        <img src="linkedin.png" />
      </a>
      <a href="https://github.com/sivams20" target="_blank">
        <img src="github.png" />
      </a>
      <a href="https://twitter.com/sivams20" target="_blank">
        <img src="twitter.png" />
      </a>
      <a href="https://www.instagram.com/sivams20/" target="_blank">
        <img src="instagram.png" />
      </a>
      <a href="https://www.facebook.com/balu.raj.5" target="_blank">
        <img src="facebook.png" />
      </a>
    </div>
  );
}

export default Social;
