import { useEffect, useState } from 'react';
import GameVisual from './GameVisual';
import LetterTray from './LetterTray';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import WordDisplay from './WordDisplay';
import Modal from '../../components/Modal';
import GameWindow from './GameWindow';

const pageTransition = {
  initial: {
    x: '100vw',
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      duration: 0.5,
    },
  },
};

const initGuessCount = 4;

const wordApiSource = 'https://random-word-api.herokuapp.com/word?number=1';

const Game: React.FC = () => {
  const [word, setWord] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchNewWord, setFetchNewWord] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isNewGame, setIsNewGame] = useState<boolean>(true);
  const [guessCount, setGuessCount] = useState<number>(initGuessCount);
  const [debugMode, setDebugMode] = useState<boolean>(false);

  function handleSetDebugMode() {
    setDebugMode(!debugMode);
  }

  function handleDecrementGuessCount() {
    if (guessCount <= 0) {
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
    setWord('');
    resetGuessCount();
  }

  function handleSetLastLetter(letter: string) {
    setGuessedLetters([...guessedLetters, letter]);
  }

  useEffect(() => {
    document.title = 'Game | WordGuess';
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
          throw new Error('Something went wrong');
        }

        const data = await response.json();

        if (!data) throw new Error('No word recieved');

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

  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageTransition}
      className=' flex items-center flex-col w-full'>
      <Modal />
      <div className='flex flex-grow items-center px-4 py-12 w-full'>
        <main className='flex justify-center lg:flex-row items-center gap-8 flex-col w-full'>
          <GameVisual>
            {isNewGame && !isLoading && !error && (
              <p className='text-2xl'>
                Press <b>New Game</b> to start
              </p>
            )}
            {!isNewGame && isLoading && !error && (
              <p className='text-2xl'>
                <i>Getting new word...</i>
              </p>
            )}
            {!isNewGame && !isLoading && !error && word && (
              <>
                <GameWindow />
                <WordDisplay
                  word={word}
                  guessedLetters={guessedLetters}
                />
              </>
            )}
            {error && <p className='text-2xl'>{`${error}`}</p>}
          </GameVisual>
          <div>
            <div className='mb-4 flex justify-between items-center w-full'>
              <p className='sm:text-2xl text-lg'>
                Guesses left: <b>{guessCount}</b>
              </p>
              <Button
                onClick={isNewGame ? handleStartNewGame : handleEndGame}
                type={isNewGame ? 'primary' : 'danger'}>
                {isNewGame ? 'New Game' : 'End Game'}
              </Button>
            </div>
            <LetterTray
              onHandleClick={handleSetLastLetter}
              onHandleGuessWrong={handleDecrementGuessCount}
              isNewGame={isNewGame}
              isLoading={isLoading}
              word={word}
            />

            <div className='mr-auto flex gap-8 items-center border-solid border-2 p-4 rounded-md mt-12'>
              <Button
                onClick={handleSetDebugMode}
                type='danger'>
                Cheat Mode
              </Button>
              {
                <p className={` text-red-200 font-bold`}>
                  The word is{' '}
                  <i
                    className={` font-normal transition-all ${
                      !debugMode ? 'blur' : 'blur-none'
                    }`}>
                    {!!word ? word : '(n/a)'}
                  </i>
                </p>
              }
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default Game;
