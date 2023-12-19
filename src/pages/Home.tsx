import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

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

const Home = () => {
  useEffect(() => {
    document.title = 'Home | WordGuess';
  }, []);

  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageTransition}>
      <main className='flex flex-grow justify-between items-center header px-4 h-full w-[100vw]'>
        <div className='flex sm:flex-row flex-col-reverse mx-auto items-center w-full max-w-screen-xl py-16 pr-4'>
          <div className='flex flex-col items-start justify-center w-full mr-auto'>
            <h1 className='md:text-6xl text-4xl mt-8 md:mt-0 text-primary-text-light dark:text-primary-text-dark font-semibold'>
              WordGuess
            </h1>
            <p className='md:text-xl text-lg mt-4 text-primary-text-light dark:text-primary-text-dark'>
              A game about finding the hidden word.
            </p>
            <div className='flex items-start justify-center mt-8 gap-8'>
              <Link to='/game'>
                <Button>
                  <span className='text-primary-text-light dark:text-primary-text-dark'>
                    New Game
                  </span>
                </Button>
              </Link>
              <Link to='/about'>
                <Button>
                  <span className='text-primary-text-light dark:text-primary-text-dark'>
                    About
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <div className='flex w-full sm:justify-end'>
            <img
              src='https://via.placeholder.com/512'
              alt='Placeholder Image'
              className='rounded-2xl'
            />
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Home;
