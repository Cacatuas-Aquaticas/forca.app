import styles from './Hangman.module.css'
import usePlayContext from "../../hooks/usePlayContext";

const Hangman = () => {
  const { errors } = usePlayContext();

  return (
    <div className={styles.wrapper}>
      <div className={styles.hangLeft} />
      <div className={styles.hangTop} />
      <div className={styles.hangConnector} />
      <div className={styles.hangBottom} />
      {errors ? <div className={styles.head} /> : ''}
      {errors > 1 ? <div className={styles.body} /> : ''}
      {errors > 2 ? <div className={styles.leftArm} /> : ''}
      {errors > 3 ? <div className={styles.rightArm} /> : ''}
      {errors > 4 ? <div className={styles.leftLeg} /> : ''}
      {errors > 5 ? <div className={styles.rightLeg} /> : ''}
    </div>
  )
}

export default Hangman;