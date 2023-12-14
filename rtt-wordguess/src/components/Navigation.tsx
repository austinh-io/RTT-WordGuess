import Logo from './Logo';

const Navigation = () => {
  return (
    <>
      <nav className=' bg-indigo-400 bg-opacity-25 px-16 py-2'>
        <div className='flex mx-auto max-w-screen-2xl'>
          <Logo />
          <ul className='flex items-center justify-end gap-8 ml-auto'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Game</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
