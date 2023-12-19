type WordDisplayProps = {
  word: string;
};

const WordDisplay = ({ word }: WordDisplayProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className=' text-4xl mb-8'>Word Display</h1>
      <p className='text-4xl'>
        The word is{' '}
        <span className=' text-primary-accent-light dark:text-primary-accent-dark font-bold'>
          {word}
        </span>
      </p>
    </div>
  );
};

export default WordDisplay;
