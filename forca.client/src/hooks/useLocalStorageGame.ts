import { useParams } from "react-router-dom"
import getCurrentDate from "../utils/getCurrentDate";
import { useMemo } from "react";

const useLocalStorageGame = (): GameData | null => {
  const { date } = useParams()

  const savedData = useMemo(() => JSON.parse(localStorage.getItem(`game-${date || getCurrentDate()}`) || 'null'), [date]) as GameData | null
  return savedData
}

export default useLocalStorageGame