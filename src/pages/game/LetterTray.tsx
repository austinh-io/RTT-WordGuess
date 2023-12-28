import { useEffect, useState } from 'react';
import LetterButton from './LetterButton';

type LetterTrayProps = {
  onHandleClick: (letter: string) => void;
  onHandleGuessWrong: () => void;
  isNewGame: boolean;
  isLoading: boolean;
  word: string;
};

//prettier-ignore
const qwertyLayout = [
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
  'z', 'x', 'c', 'v', 'b', 'n', 'm']

const LetterTray = ({
  onHandleClick,
  onHandleGuessWrong,
  isNewGame,
  isLoading,
  word,
}: LetterTrayProps) => {
  const [disabledLetters, setDisabledLetters] = useState<string[]>([]);

  useEffect(() => {
    setDisabledLetters([]);
  }, [isNewGame]);

  const handleClick = (letter: string) => {
    onHandleClick(letter);
    setDisabledLetters([...disabledLetters, letter]);
  };

  return (
    <>
      <div
        className='grid letter-tray sm:gap-4 gap-1 w-full max-w-screen-md'
        style={{ gridTemplateColumns: 'repeat(10, 1fr)' }}>
        {qwertyLayout.map((letter) => (
          <div
            className='aspect-square w-full h-full'
            key={letter}>
            <LetterButton
              letter={letter}
              startDisabled={
                isLoading || isNewGame ? true : disabledLetters.includes(letter)
              }
              onClick={() => handleClick(letter)}
              onGuessWrong={onHandleGuessWrong}
              word={word}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default LetterTray;
