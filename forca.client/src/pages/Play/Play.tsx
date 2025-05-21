import { PlayProvider } from "../../providers/Play/Play.provider";
import styles from './Play.module.css';
import Hangman from "../../components/Hangman";
import Keyboard from "../../components/Keyboard";
import Word from "../../components/Word";
import Timer from "../../components/Timer";
import EndgameModal from "../../components/EndgameModal";
import { useState, useEffect } from "react";
import fetchGame from "../../utils/fetchGame";
import { useParams } from "react-router-dom";
import LoadingGame from "../../components/LoadingGame";
import getCurrentDate from "../../utils/getCurrentDate";

const Play = () => {
  const { date } = useParams();
  const [word, setWord] = useState<string>("");

  useEffect(() => {
    const fetchWord = async () => {
      const fetchedWord = await fetchGame(date || getCurrentDate());
      setWord(fetchedWord);
    };

    fetchWord();
  }, [date]);

  return (
    <main className={styles.container}>
      {word ? (
        <PlayProvider word={word}>
          <EndgameModal />
          <Timer />
          <div className={styles.wordHangman}>
            <Hangman />
            <Word />
          </div>
          <Keyboard />
          Teste
        </PlayProvider>
      ) : <LoadingGame />}
    </main>
  )
};

export default Play;
