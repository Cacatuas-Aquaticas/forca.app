declare global {
  type CharKey = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J'
    | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T'
    | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | '-';
  type PressedKeys = Array<{
    char: CharKey,
    correct: boolean
  }>
  type GameData = {
    pressedKeys: PressedKeys,
    guessedWord: boolean,
    lostGame: boolean,
    word: string,
    seconds: number
  }
}

export { };
