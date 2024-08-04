import { useEffect } from 'react';

const GameWindow = () => {
  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const canvasContext = canvas.getContext('2d');

    canvasContext?.moveTo(0, 0);
    canvasContext?.lineTo(200, 100);
    canvasContext?.stroke();

    canvas.width = window.innerWidth;

    let heightRatio = 1;
    canvas.height = canvas.width * heightRatio;
  }, []);
  return (
    <>
      <div>
        <h1>Game Window</h1>
      </div>
      <canvas className='w-full border-solid border-2 rounded-md'></canvas>
    </>
  );
};

export default GameWindow;
