import Logo from './Logo';

const Navigation = () => {
  return (
    <>
      <nav className='flex px-16 py-2'>
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
      </nav>
    </>
  );
};

export default Navigation;
