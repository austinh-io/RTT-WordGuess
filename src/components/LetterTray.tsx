import LetterButton from './LetterButton';

//prettier-ignore
const qwertyLayout = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

const LetterTray = () => {
  return (
    <>
      <div className='grid gap-2 sm:gap-4'>
        {qwertyLayout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex items-center justify-center gap-2 sm:gap-4`}>
            {row.map((letter) => (
              <LetterButton
                key={letter}
                onClick={() => console.log(letter)}
                letter={letter}
              />
            ))}
          </div>
        ))}
      </div>

      {/* <div className='flex flex-wrap border-solid border-2 bg-slate-900 border-slate-700 rounded-lg min-h-[4rem] min-w-[4rem] gap-4 p-4 max-w-screen-sm'></div> */}
    </>
  );
};

export default LetterTray;
