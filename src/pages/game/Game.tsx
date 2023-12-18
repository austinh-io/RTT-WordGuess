import GameVisual from './GameVisual';
import LetterTray from './LetterTray';
import { motion } from 'framer-motion';

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
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageTransition}>
      <div className='flex flex-grow justify-center items-center px-4 py-12'>
        <main className='flex flex-col gap-8'>
          <GameVisual />
          <LetterTray />
        </main>
      </div>
    </motion.div>
  );
};

export default Game;
