import { useEffect, useState } from 'react';
import GameVisual from './GameVisual';
import LetterTray from './LetterTray';
import { motion } from 'framer-motion';
import Button from '../../components/Button';

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

const Game: React.FC = () => {
  const [word, setWord] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchNewWord, setFetchNewWord] = useState<boolean>(true);

  function handleNewWord() {
    setFetchNewWord(!fetchNewWord);
  }

  useEffect(() => {
    document.title = 'Game | WordGuess';
    async function fetchWord() {
      try {
        setIsLoading(true);

        const response = await fetch(
          'https://random-word-api.herokuapp.com/word?number=1'
        );

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data = await response.json();

        if (data.response === 'error') throw new Error(data.error);

        setWord(data[0]);
        console.log(data);
      } catch (error) {
        console.log(error);
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
        <main className='flex flex-col gap-8'>
          <GameVisual
            word={word}
            isLoading={isLoading}
          />
          <LetterTray />
          <Button onClick={handleNewWord}> New Word </Button>
        </main>
      </div>
    </motion.div>
  );
};

export default Game;
