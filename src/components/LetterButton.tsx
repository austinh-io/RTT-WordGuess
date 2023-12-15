type LetterButtonProps = {
  letter: string;
  onClick?: () => void;
};

const LetterButton = ({ letter, onClick }: LetterButtonProps) => {
  return (
    <button
      className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded'
      onClick={onClick}>
      {letter}
    </button>
  );
};

export default LetterButton;
