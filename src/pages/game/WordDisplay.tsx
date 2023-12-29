import WordDisplaySegment from './WordDisplaySegment';

type WordDisplayProps = {
  word: string;
  guessedLetters: string[];
};

const WordDisplay = ({ word, guessedLetters }: WordDisplayProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex text-4xl'>
        {word.split('').map((letter, index) => {
          return (
            <WordDisplaySegment
              key={index}
              letter={letter}
              hidden={
                !!guessedLetters
                  ? guessedLetters.includes(letter)
                    ? false
                    : true
                  : true
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default WordDisplay;
