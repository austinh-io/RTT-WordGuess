import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const pageTransition = {
  initial: {
    x: '-100vw',
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    x: '100vw',
    transition: {
      duration: 0.5,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageTransition}>
      <main className='flex flex-grow justify-between items-center header px-4 h-full w-[100vw]'>
        <div className='flex sm:flex-row flex-col-reverse mx-auto justify-normal sm:justify-between items-center w-full max-w-screen-xl py-16'>
          <div className='flex flex-col items-start justify-center w-full'>
            <h1 className='md:text-6xl text-4xl mt-8 md:mt-0 text-indigo-400 font-semibold'>
              WordGuess
            </h1>
            <p className='md:text-3xl text-xl mt-4'>
              A game about finding the hidden word.
            </p>
            <div className='flex items-start justify-center mt-8 gap-8'>
              <Button>
                <Link to='/game'>New Game</Link>
              </Button>
              <Button>
                <Link to='/about'>About</Link>
              </Button>
            </div>
          </div>
          <div className='items-center justify-center w-full'>
            <picture>
              <img
                src='https://via.placeholder.com/512'
                alt='Placeholder Image'
                className='rounded-2xl w-full'
              />
            </picture>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Home;
