type GameVisualProps = {
  word: string;
  isLoading: boolean;
  children?: React.ReactNode;
};

const GameVisual = ({ word, isLoading, children }: GameVisualProps) => {
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-screen-md'>
      <div className='flex flex-col items-center justify-center border-solid border-2  border-secondary-accent-light bg-secondary-bg-light dark:border-secondary-accent-dark dark:bg-secondary-bg-dark rounded-lg h-full w-full aspect-square'>
        {!isLoading ? (
          <>
            <div className='flex flex-col items-center justify-center gap-4'>
              {children}
            </div>
          </>
        ) : (
          <p className='text-2xl'>Getting new word...</p>
        )}
      </div>
    </div>
  );
};

export default GameVisual;
