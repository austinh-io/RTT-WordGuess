type LetterButtonProps = {
  letter: string;
  onClick?: () => void;
};

const LetterButton = ({ letter, onClick }: LetterButtonProps) => {
  return (
    <button
      className='flex items-center justify-center bg-slate-800 hover:bg-indigo-800 text-indigo-200 font-bold w-6 h-6 text-sm sm:text-xl sm:h-12 sm:w-12 sm:p-6 rounded'
      onClick={onClick}>
      {letter.toUpperCase()}
    </button>
  );
};

export default LetterButton;
