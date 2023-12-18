type LetterButtonProps = {
  letter: string;
  onClick?: () => void;
};

const LetterButton = ({ letter, onClick }: LetterButtonProps) => {
  return (
    <button
      className='flex items-center justify-center w-full h-full p-1 sm:p-2 sm:text-3xl bg-secondary-bg-light dark:bg-secondary-bg-dark hover:bg-primary-accent-hover-light dark:hover:bg-primary-accent-hover-dark text-primary-text-light dark:text-primary-text-dark  font-bold rounded'
      onClick={onClick}>
      {letter.toUpperCase()}
    </button>
  );
};

export default LetterButton;
