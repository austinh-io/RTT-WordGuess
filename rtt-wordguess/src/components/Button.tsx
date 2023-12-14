const Button = (props: ButtonProps) => {
  const { children, onClick } = props;
  return (
    <button
      className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded'
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
