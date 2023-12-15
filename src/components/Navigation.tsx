import Logo from './Logo';
import StandardLink from './StyledLink';

const Navigation = () => {
  return (
    <>
      <nav className=' bg-indigo-400 bg-opacity-25 px-4 py-2'>
        <div className='flex mx-auto max-w-screen-xl'>
          <Logo />
          <ul className='flex items-center justify-end gap-4 ml-auto'>
            <li>
              <StandardLink
                text='Home'
                uri='/'></StandardLink>
            </li>
            <li>
              <StandardLink
                text='Game'
                uri='/game'></StandardLink>
            </li>
            <li>
              <StandardLink
                text='About'
                uri='/about'></StandardLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
