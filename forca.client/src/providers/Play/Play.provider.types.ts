export type PlayContextValues = {
  pressedKeys: PressedKeys
  pushKey: (newKey: CharKey) => void
  word: string
  errors: number
  guessedWord: boolean
  lostGame: boolean
  seconds: number
}