import { useEffect } from 'react';

type WordDisplayProps = {
  letter: string;
  hidden: boolean;
};

const WordDisplaySegment = ({ letter, hidden }: WordDisplayProps) => {
  // useEffect(() => {}, [hidden]);
  return (
    <>
      <div className=' font-semibold'>
        <i>{hidden ? '_' : letter}</i>
      </div>
    </>
  );
};

export default WordDisplaySegment;
