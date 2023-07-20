import styles from "../styles/Credits.module.css";

const Credits = () => {
  return (
    <div className={styles.credits}>
      <p className={styles.text}>
        Made with <span className={styles.heart}>❤️</span>  by
        <a className={styles.link} href="https://github.com/theogiovedi" target="_blank">Théo Giovedi</a>
      </p>
    </div>
  );
};

export default Credits;
