import { useEffect, useState } from "react";

type LetterButtonProps = {
  letter: string;
  onButtonClick?: () => void;
  onGuessWrong?: () => void;
  startDisabled: boolean;
  word: string;
};

const LetterButton = ({
  letter,
  onButtonClick,
  onGuessWrong,
  startDisabled,
  word,
}: LetterButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(startDisabled);
  }, [startDisabled]);

  function checkIfGuessIsWrong() {
    if (!word.split("").some((char) => char === letter)) {
      if (!!onGuessWrong) onGuessWrong();
    }
  }

  return (
    <button
      className="flex items-center justify-center w-full h-full transition-colors p-1 sm:p-2 sm:text-3xl bg-secondary-bg-light dark:bg-secondary-bg-dark hover:bg-primary-accent-hover-light dark:hover:bg-primary-accent-hover-dark text-primary-text-light dark:text-primary-text-dark  font-bold rounded disabled:bg-disabled-light dark:disabled:bg-disabled-dark disabled:hover:bg-disabled-light dark:disabled:hover:bg-disabled-dark disabled:hover:cursor-default disabled:text-disabled-text-light dark:disabled:text-disabled-text-dark"
      onClick={() => {
        if (!!onButtonClick) onButtonClick();
        setIsClicked(true);
        if (!!onGuessWrong) checkIfGuessIsWrong();
      }}
      disabled={isClicked || startDisabled}
    >
      {letter.toUpperCase()}
    </button>
  );
};

export default LetterButton;
