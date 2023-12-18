type LetterButtonProps = {
  letter: string;
  onClick?: () => void;
};

const LetterButton = ({ letter, onClick }: LetterButtonProps) => {
  return (
    <button
      className='flex items-center justify-center w-full h-full p-1 sm:p-2 sm:text-3xl bg-slate-800 hover:bg-indigo-800 text-indigo-200 font-bold rounded'
      onClick={onClick}>
      {letter.toUpperCase()}
    </button>
  );
};

export default LetterButton;
