import { useEffect, useState } from 'react';

type LetterButtonProps = {
  letter: string;
  onClick?: () => void;
  startDisabled: boolean;
};

const LetterButton = ({
  letter,
  onClick,
  startDisabled,
}: LetterButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(startDisabled);
  }, [startDisabled]);

  return (
    <button
      className='flex items-center justify-center w-full h-full transition-colors p-1 sm:p-2 sm:text-3xl bg-secondary-bg-light dark:bg-secondary-bg-dark hover:bg-primary-accent-hover-light dark:hover:bg-primary-accent-hover-dark text-primary-text-light dark:text-primary-text-dark  font-bold rounded disabled:bg-disabled-light dark:disabled:bg-disabled-dark disabled:hover:bg-disabled-light dark:disabled:hover:bg-disabled-dark disabled:hover:cursor-default disabled:text-disabled-text-light dark:disabled:text-disabled-text-dark'
      onClick={() => {
        if (!!onClick) onClick();
        setIsClicked(true);
      }}
      disabled={isClicked || startDisabled}>
      {letter.toUpperCase()}
    </button>
  );
};

export default LetterButton;
