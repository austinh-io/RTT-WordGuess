type WordDisplayProps = {
  letter: string;
  hidden: boolean;
};

const WordDisplaySegment = ({ letter, hidden }: WordDisplayProps) => {
  return (
    <>
      <div>{hidden ? '_' : letter}</div>
    </>
  );
};

export default WordDisplaySegment;
