import { useCallback, useEffect, useState } from "react";
import words from "./wordlist.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

const generateWordToGuess = (): string =>
  words[Math.floor(Math.random() * words.length)];

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(generateWordToGuess());
  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);

  const incorrectLetter = guessedLetter.filter(letter => {
    return !wordToGuess.includes(letter.toLowerCase());
  });

  const isLoser = incorrectLetter.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => {
    return guessedLetter.includes(letter);
  });

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetter.includes(letter.toLowerCase()) || isLoser || isWinner)
        return;
      setGuessedLetter(currentLetter => [
        ...currentLetter,
        letter.toLowerCase(),
      ]);
    },
    [guessedLetter, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetter([]);
      setWordToGuess(generateWordToGuess());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        {isWinner && (
          <div>
            <b>Winner !</b> - Refresh or press enter to try again
          </div>
        )}
        {isLoser && (
          <div>
            <b>Nice try !</b> - Refresh or press enter to try again
          </div>
        )}
      </div>

      <HangmanDrawing
        isLoser={isLoser}
        numberOfGuesses={incorrectLetter.length}
      />
      <HangmanWord
        reveal={isLoser}
        guessedLetter={guessedLetter}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          activeLetters={guessedLetter.filter((letter: string) => {
            return wordToGuess.includes(letter);
          })}
          inActiveLetters={incorrectLetter}
          addGuessedLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
};

export default App;
