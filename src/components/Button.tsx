import React from 'react';

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className='bg-primary-accent-light dark:bg-primary-accent-dark hover:bg-primary-accent-hover-light dark:hover:bg-primary-accent-hover-dark text-primary-text-light dark:text-primary-text-dark  transition-colors  font-bold py-2 px-4 rounded'
      onClick={() => console.log('Clicked!')}>
      {children}
    </button>
  );
};

export default Button;
