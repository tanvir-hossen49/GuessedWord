type HangmanWordProps = {
  reveal?: boolean;
  guessedLetter: string[];
  wordToGuess: string;
};

const HangmanWord = ({
  guessedLetter,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  console.log(wordToGuess, { guessedLetter });

  return (
    <div
      style={{
        display: "flex",
        gap: ".25rem",
        fontSize: "4rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: ".1em solid black",
          }}
        >
          <span
            style={{
              visibility:
                guessedLetter.includes(letter) || reveal ? "visible" : "hidden",
              color: !guessedLetter.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
