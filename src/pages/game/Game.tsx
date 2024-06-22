import { useEffect, useState } from "react";
import GameVisual from "./GameVisual";
import LetterTray from "./LetterTray";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import WordDisplay from "./WordDisplay";
import Modal from "../../components/Modal";
import GameWindow from "./GameWindow";

const pageTransition = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
};

function allGuessedLettersMatch(word: string, charArray: string[]): boolean {
  for (const letter of word) {
    if (!charArray.includes(letter)) {
      return false;
    }
  }
  return true;
}

const initGuessCount = 3;

const wordApiSource = "https://random-word-api.herokuapp.com/word?number=1";

const Game: React.FC = () => {
  const [word, setWord] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchNewWord, setFetchNewWord] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isNewGame, setIsNewGame] = useState<boolean>(true);
  const [guessCount, setGuessCount] = useState<number>(initGuessCount);
  const [debugMode, setDebugMode] = useState<boolean>(false);
  const [modalEnabled, setModalEnabled] = useState<boolean>(false);
  const [playerIsWinner, setPlayerIsWinner] = useState<boolean>(false);

  function handleSetDebugMode() {
    setDebugMode(!debugMode);
  }

  function handleDecrementGuessCount() {
    if (guessCount <= 1) {
      setPlayerIsWinner(false);
      handleEndGame();
      return;
    }
    setGuessCount(guessCount - 1);
  }

  function resetGuessCount() {
    setGuessCount(initGuessCount);
  }

  function handleStartNewGame() {
    setIsNewGame(false);
    setFetchNewWord(!fetchNewWord);
  }

  function handleEndGame() {
    setIsNewGame(true);
    setWord("");
    resetGuessCount();
    setModalEnabled(() => true);

    if (allGuessedLettersMatch(word, guessedLetters)) {
      setPlayerIsWinner(true);
    } else {
      setPlayerIsWinner(false);
    }
  }

  function checkIfWonGame() {
    if (allGuessedLettersMatch(word, guessedLetters)) {
      setPlayerIsWinner(true);
      handleEndGame();
      return;
    }
  }

  function handleSetLastLetter(letter: string) {
    setGuessedLetters([...guessedLetters, letter]);
  }

  useEffect(() => {
    document.title = "Game | WordGuess";
  });

  useEffect(() => {
    if (isNewGame) {
      setGuessedLetters([]);
    }
  }, [isNewGame]);

  useEffect(() => {
    async function fetchWord() {
      if (isNewGame) return;
      try {
        setIsLoading(true);

        const response = await fetch(wordApiSource);

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();

        if (!data) throw new Error("No word recieved");

        setWord(data[0]);
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchWord();
  }, [fetchNewWord]);

  useEffect(() => {
    if (guessedLetters.length > 0 && word !== "") checkIfWonGame();
  }, [guessedLetters, word]);

  return (
    <>
      <Modal enabled={modalEnabled} onClose={() => setModalEnabled(false)}>
        <h4>{playerIsWinner ? "Winner!" : "Loser!"}</h4>
        {playerIsWinner ? "You won!" : "You lost!"}
        <Button onClick={() => setModalEnabled(false)}>New Game</Button>
      </Modal>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="flex flex-col w-full max-w-7xl px-4"
      >
        <div className="flex flex-col mt-8">
          <main className="flex flex-col lg:flex-row items-center gap-8">
            <GameVisual>
              {isNewGame && !isLoading && !error && (
                <p className="text-2xl">
                  Press <b>New Game</b> to start
                </p>
              )}
              {!isNewGame && isLoading && !error && (
                <p className="text-2xl">
                  <i>Getting new word...</i>
                </p>
              )}
              {!isNewGame && !isLoading && !error && word && (
                <>
                  <GameWindow />
                  <WordDisplay word={word} guessedLetters={guessedLetters} />
                </>
              )}
              {error && <p className="text-2xl">{`${error}`}</p>}
            </GameVisual>
            <div className="flex flex-col w-full flex-grow">
              <div className="flex justify-between items-center">
                <p className="sm:text-2xl text-lg">
                  Guesses left: <b>{guessCount}</b>
                </p>
                <Button
                  onClick={isNewGame ? handleStartNewGame : handleEndGame}
                  type={isNewGame ? "primary" : "danger"}
                  disabled={isLoading ? true : false}
                >
                  {isNewGame ? "New Game" : "End Game"}
                </Button>
              </div>
              <div className="mt-8">
                <LetterTray
                  onHandleClick={handleSetLastLetter}
                  onHandleGuessWrong={handleDecrementGuessCount}
                  isNewGame={isNewGame}
                  isLoading={isLoading}
                  word={word}
                />
              </div>

              <div className="flex gap-8 items-center border-solid border-2 rounded-md p-4 mt-24 mr-auto sm:mb-auto mb-8">
                <Button onClick={handleSetDebugMode} type="danger">
                  Cheat Mode
                </Button>
                {
                  <p className={` text-red-200 font-bold`}>
                    The word is{" "}
                    <i
                      className={` font-normal transition-all ${
                        !debugMode ? "blur" : "blur-none"
                      }`}
                    >
                      {!!word ? word : "(n/a)"}
                    </i>
                  </p>
                }
              </div>
            </div>
          </main>
        </div>
      </motion.div>
    </>
  );
};

export default Game;
