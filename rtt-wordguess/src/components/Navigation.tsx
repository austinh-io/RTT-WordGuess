import Logo from './Logo';
import StandardLink from './StandardLink';

const Navigation = () => {
  return (
    <>
      <nav className=' bg-indigo-400 bg-opacity-25 px-4 py-2'>
        <div className='flex mx-auto max-w-screen-xl'>
          <Logo />
          <ul className='flex items-center justify-end gap-4 ml-auto'>
            <li>
              <StandardLink
                title='Home'
                link='/'></StandardLink>
            </li>
            <li>
              <StandardLink
                title='Game'
                link='/game'></StandardLink>
            </li>
            <li>
              <StandardLink
                title='About'
                link='/about'></StandardLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
