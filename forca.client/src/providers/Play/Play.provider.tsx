import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { PlayContextValues } from './Play.provider.types';
import normalize from '../../utils/normalize';
import useLocalStorageGame from '../../hooks/useLocalStorageGame';
import useDate from '../../hooks/useDate';

const PlayContext = createContext<PlayContextValues>({
  pressedKeys: [],
  pushKey: () => { },
  word: '',
  errors: 0,
  guessedWord: false,
  lostGame: false,
  seconds: 0,
});

export const PlayProvider = ({
  word,
  children
}: PropsWithChildren<{ word: string }>) => {
  const savedData = useLocalStorageGame();
  const date = useDate()

  const [seconds, setSeconds] = useState<number>(savedData?.seconds || 0);
  const [pressedKeys, setPressedKeys] = useState<PressedKeys>(savedData?.pressedKeys || [])
  const [errors, setErrors] = useState<number>(0)
  const [guessedWord, setGuessedWord] = useState<boolean>(savedData?.guessedWord || false)
  const [lostGame, setLostGame] = useState<boolean>(savedData?.guessedWord || false)

  const saveToLocalStorage = () => {
    const gameData = {
      pressedKeys,
      guessedWord,
      lostGame,
      word,
      seconds,
    } as GameData;
    localStorage.setItem(`game-${date}`, JSON.stringify(gameData));
  };

  const pushKey = (newKey: CharKey) => {
    if (pressedKeys.some(pressedKey => pressedKey.char === newKey)) return
    let correct = normalize(word).includes(newKey)
    setPressedKeys(prevPressedKeys => [...prevPressedKeys, { char: newKey, correct }])
  }

  // Handles timer
  useEffect(() => {
    if (guessedWord || lostGame) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [guessedWord, lostGame]);

  // Validate Victory
  useEffect(() => {
    const lettersToGuess = new Set(normalize(word).split('-').join('')).size;
    const guessedLetters = pressedKeys.filter(k => k.correct && k.char !== '-').length
    if (lettersToGuess === guessedLetters) setGuessedWord(true)
    saveToLocalStorage();
  }, [pressedKeys])

  // Validate Lost
  useEffect(() => {
    if (pressedKeys.filter(pressedKey => !pressedKey.correct).length > 5)
      setLostGame(true)
    saveToLocalStorage();
  }, [pressedKeys])

  useEffect(() => {
    saveToLocalStorage()
  }, [lostGame, guessedWord])

  // Track errors
  useEffect(() => {
    const errorsQuantity = pressedKeys.filter(k => !k.correct).length
    setErrors(errorsQuantity)
  }, [pressedKeys])

  // Handles hyphen
  useEffect(() => {
    if (normalize(word).includes('-') && !pressedKeys.some(k => k.char === '-'))
      pushKey('-')
  }, [word])

  return (
    <PlayContext.Provider value={{
      pressedKeys,
      pushKey,
      word,
      errors,
      guessedWord,
      lostGame,
      seconds,
    }}>
      {children}
    </PlayContext.Provider>
  );
};

export default PlayContext;
