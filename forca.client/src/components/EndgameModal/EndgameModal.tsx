import { useEffect, useState } from "react"
import usePlayContext from "../../hooks/usePlayContext"
import styles from './EndgameModal.module.css'
import { Link } from "react-router-dom"

const EndgameModal = () => {
  const { guessedWord, lostGame, word, pressedKeys } = usePlayContext()
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    if (guessedWord || lostGame)
      setShowModal(true)
  }, [guessedWord, lostGame])

  return showModal ? (
    <div className={styles.wrapper}>
      <div className={styles.backdrop} onClick={() => setShowModal(false)} />
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={() => setShowModal(false)}>+</button>
        <h1 className={styles.title}>{guessedWord ? 'Parabéns!' : lostGame ? 'Você errou' : ''}</h1>
        <p>
          A palavra era <strong>{word}</strong>
        </p>

        <div className={styles.history}>
          {pressedKeys.filter(k => k.char !== '-').map(pressedKey => (
            <div key={pressedKey.char} className={`${styles.choice} ${styles[`${pressedKey.correct}`]}`} />
          ))}
        </div>

        <Link
          className={styles.continue}
          to="/calendar"
        >Mais jogos</Link>

        <button
          className={`${styles.continue} ${styles.secondary}`}
          onClick={() => setShowModal(false)}
        >Continuar</button>
      </div>
    </div>
  ) : <></>
}

export default EndgameModal