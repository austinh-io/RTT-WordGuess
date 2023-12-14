import React from 'react';

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded'
      onClick={() => console.log('Clicked!')}>
      {children}
    </button>
  );
};

export default Button;
