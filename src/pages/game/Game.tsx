import { useEffect, useState } from 'react';
import GameVisual from './GameVisual';
import LetterTray from './LetterTray';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import WordDisplay from './WordDisplay';

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

const wordApiSource = 'https://random-word-api.herokuapp.com/word?number=1';

const Game: React.FC = () => {
  const [word, setWord] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchNewWord, setFetchNewWord] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [lastLetter, setLastLetter] = useState<string>('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isNewGame, setIsNewGame] = useState<boolean>(true);

  function handleStartNewGame() {
    setIsNewGame(false);
    setFetchNewWord(!fetchNewWord);
  }

  function handleEndGame() {
    setIsNewGame(true);
  }

  function handleSetLastLetter(letter: string) {
    setLastLetter(letter);
    setGuessedLetters([...guessedLetters, letter]);
    console.log(lastLetter);
    console.log(guessedLetters);
  }

  useEffect(() => {
    if (isNewGame) {
      setLastLetter('');
      setGuessedLetters([]);
    }
  }, [isNewGame]);

  useEffect(() => {
    document.title = 'Game | WordGuess';
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
      variants={pageTransition}>
      <div className='flex flex-grow justify-center items-center px-4 py-12'>
        <main className='flex flex-col items-center gap-8'>
          <GameVisual>
            {isNewGame && <p className='text-2xl'>Press New Game to start</p>}
            {isLoading && <p className='text-2xl'>Getting new word...</p>}
            {!isLoading && !error && !isNewGame && <WordDisplay word={word} />}
            {error && <p className='text-2xl'>{`${error}`}</p>}
          </GameVisual>
          <LetterTray
            onHandleClick={handleSetLastLetter}
            isNewGame={isNewGame}
            isLoading={isLoading}
          />
          <div className='mt-12'>
            <Button onClick={isNewGame ? handleStartNewGame : handleEndGame}>
              {isNewGame ? 'New Game' : 'End Game'}
            </Button>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default Game;
