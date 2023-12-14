import Button from './Button';

const Header = () => {
  return (
    <header className='flex flex-grow justify-between items-center header bg-zinc-800 px-4 h-full'>
      <div className='flex sm:flex-row flex-col-reverse mx-auto  justify-normal sm:justify-between items-center w-full max-w-screen-xl'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className='md:text-6xl text-4xl mt-8 md:mt-0 text-indigo-400 font-semibold'>
            WordGuess
          </h1>
          <p className='md:text-3xl text-xl mt-4'>
            A game about finding the hidden word.
          </p>
          <div className='flex items-start justify-center mt-8 gap-8'>
            <Button>New Game</Button>
            <Button>About</Button>
          </div>
        </div>
        <div className='items-center justify-center'>
          <picture>
            <img
              src='https://via.placeholder.com/512'
              alt='Placeholder Image'
              className='rounded-2xl w-full'
            />
          </picture>
        </div>
      </div>
    </header>
  );
};

export default Header;
