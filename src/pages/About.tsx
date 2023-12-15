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
const About: React.FC = () => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageTransition}
      className='flex flex-grow justify-between items-center header px-4 h-full w-[100vw]'>
      <div className='flex sm:flex-row flex-col-reverse mx-auto justify-normal sm:justify-between items-center w-full max-w-screen-xl py-16'>
        <div className='flex flex-col items-start justify-center w-full'>
          <h1 className='md:text-6xl text-4xl mt-8 md:mt-0 text-indigo-400 font-semibold'>
            About
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
