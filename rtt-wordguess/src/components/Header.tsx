import Button from './Button';

const Header = () => {
  return (
    <header className='flex flex-grow justify-between header bg-zinc-800 px-16 h-full'>
      <div className='flex mx-auto justify-between items-center w-full max-w-screen-2xl'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className='2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-xl text-indigo-400 font-semibold'>
            WordGuess
          </h1>
          <p className='text-3xl mt-4'>A game about finding the hidden word.</p>
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
              className='rounded-2xl w-96'
            />
          </picture>
        </div>
      </div>
    </header>
  );
};

export default Header;
