import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>¡Bienvenidos a X!</h1>
      </div>
    </div>
  );
}

export default Hero;
