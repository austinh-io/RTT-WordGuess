import Button from './Button';

const Header = () => {
  return (
    <header className='header bg-zinc-800 px-16 py-32 '>
      <div className='flex mx-auto justify-between max-w-screen-2xl'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className='text-9xl text-indigo-400 font-semibold'>WordGuess</h1>
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
              className='rounded-2xl'
            />
          </picture>
        </div>
      </div>
    </header>
  );
};

export default Header;
