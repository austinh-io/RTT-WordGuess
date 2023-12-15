import GameVisual from '../components/GameVisual';
import LetterTray from '../components/LetterTray';

const Game: React.FC = () => {
  return (
    <>
      <main className='flex flex-col flex-grow justify-center items-center header bg-zinc-800 px-4 h-full gap-8'>
        <GameVisual />
        <LetterTray />
      </main>
    </>
  );
};

export default Game;
