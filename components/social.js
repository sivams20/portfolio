import Image from "next/image";
import styles from "../styles/Social.module.css";

function Social() {
  return (
    <div className={styles.media}>
      <a href="https://www.linkedin.com/in/baluraj-s-38326573/" target="_blank">
        <Image
          src="https://sivams20.github.io/portfolio/linkedin.png"
          alt="linkedin"
          width="45"
          height="45"
        />
      </a>
      <a href="https://github.com/sivams20" target="_blank">
        <Image
          src="https://sivams20.github.io/portfolio/github.png"
          alt="github"
          width="45"
          height="45"
        />
      </a>
      <a href="https://twitter.com/sivams20" target="_blank">
        <Image
          src="https://sivams20.github.io/portfolio/twitter.png"
          alt="twitter"
          width="45"
          height="45"
        />
      </a>
      <a href="https://www.instagram.com/sivams20/" target="_blank">
        <Image
          src="https://sivams20.github.io/portfolio/instagram.png"
          alt="instagram"
          width="45"
          height="45"
        />
      </a>
      <a href="https://www.facebook.com/balu.raj.5" target="_blank">
        <Image
          src="https://sivams20.github.io/portfolio/facebook.png"
          alt="facebook"
          width="45"
          height="45"
        />
      </a>
    </div>
  );
}

export default Social;
