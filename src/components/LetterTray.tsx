import LetterButton from './LetterButton';

const LetterTray = () => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

  return (
    <>
      <div className='flex flex-wrap border-solid border-2 bg-zinc-700 border-blue-400 rounded-lg min-h-[4rem] min-w-[4rem] gap-4 p-4'>
        {letters.map((letter) => (
          <LetterButton
            key={letter}
            onClick={() => console.log(letter)}
            letter={letter}
          />
        ))}
      </div>
    </>
  );
};

export default LetterTray;
