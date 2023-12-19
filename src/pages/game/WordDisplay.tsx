import WordDisplaySegment from './WordDisplaySegment';

type WordDisplayProps = {
  word: string;
};

const WordDisplay = ({ word }: WordDisplayProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-4xl mb-4'>The word is</p>
      <div className='flex text-4xl'>
        {word.split('').map((letter, index) => {
          return (
            <WordDisplaySegment
              key={index}
              letter={letter}
              hidden={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WordDisplay;
