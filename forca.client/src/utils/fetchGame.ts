const fetchGame = async (date: string): Promise<string> => {
  const savedData = JSON.parse(localStorage.getItem(`game-${date}`) || "{}");

  if (savedData.word) return savedData.word;

  // Request API here, without localhost:3000
  const response = await fetch(`/api/game/${date}`);  // Alterado para `/api`
  const data = await response.json();
  return data.word.toUpperCase();
};

export default fetchGame;
