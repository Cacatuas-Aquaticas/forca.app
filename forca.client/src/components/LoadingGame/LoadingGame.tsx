import styles from "./LoadingGame.module.css"

const LoadingGame = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hangman} />
      <div className={styles.word} />
      <div className={styles.keyboard} />
    </div>
  )
}

export default LoadingGame