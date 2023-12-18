const GameVisual = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-screen-md'>
      <div className='flex border-solid border-2  border-secondary-accent-light bg-secondary-bg-light dark:border-secondary-accent-dark dark:bg-secondary-bg-dark rounded-lg h-full w-full aspect-square'>
        <span className='flex items-center justify-center mx-auto text-2xl text-primary-text-light dark:text-primary-text-dark font-bold'>
          Game Visual
        </span>
      </div>
    </div>
  );
};

export default GameVisual;
