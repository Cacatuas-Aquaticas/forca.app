import usePlayContext from "../../hooks/usePlayContext"
import normalize from "../../utils/normalize";
import styles from './Word.module.css'

const Word = () => {
  const { word, pressedKeys } = usePlayContext();

  return word.length && (
    <section className={styles.word}>
      {word.split('').map((letter, i) => (
        <div key={i} className={styles.letter} data-hideborder={letter === '-'}>
          {pressedKeys.some(pressedKey => pressedKey.char === normalize(letter)) && letter}
        </div>
      ))}
    </section>
  )
}

export default Word