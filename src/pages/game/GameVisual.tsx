type GameVisualProps = {
  word: string;
  isLoading: boolean;
};

const GameVisual = ({ word, isLoading }: GameVisualProps) => {
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-screen-md'>
      <div className='flex flex-col items-center justify-center border-solid border-2  border-secondary-accent-light bg-secondary-bg-light dark:border-secondary-accent-dark dark:bg-secondary-bg-dark rounded-lg h-full w-full aspect-square'>
        {!isLoading ? (
          <>
            <p className='flex items-center justify-center mx-auto text-2xl text-primary-text-light dark:text-primary-text-dark font-bold'>
              Game Visual
            </p>
            <p>The word is {word}</p>
          </>
        ) : (
          <p>Getting new word...</p>
        )}
      </div>
    </div>
  );
};

export default GameVisual;
