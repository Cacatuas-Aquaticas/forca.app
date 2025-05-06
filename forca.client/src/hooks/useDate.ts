import { useParams } from "react-router-dom"
import getCurrentDate from "../utils/getCurrentDate";

const useDate = () => {
  const {date} = useParams();

  if (date) return date
  return getCurrentDate()
}

export default useDate