import GameVisual from '../components/GameVisual';
import LetterTray from '../components/LetterTray';
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

const Game: React.FC = () => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageTransition}>
      <main className='flex flex-col flex-grow justify-center items-center header px-4 h-full gap-8  w-[100vw]'>
        <GameVisual />
        <LetterTray />
      </main>
    </motion.div>
  );
};

export default Game;
