type LetterButtonProps = {
  letter: string;
  onClick?: () => void;
};

const LetterButton = ({ letter, onClick }: LetterButtonProps) => {
  return (
    <button
      className='bg-slate-800 hover:bg-indigo-800 text-indigo-200 font-bold py-2 px-4 rounded'
      onClick={onClick}>
      {letter}
    </button>
  );
};

export default LetterButton;
