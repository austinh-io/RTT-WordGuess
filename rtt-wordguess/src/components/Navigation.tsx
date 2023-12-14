import Logo from './Logo';
import NormalNavLink from './NormalNavLink';

const Navigation = () => {
  return (
    <>
      <nav className=' bg-indigo-400 bg-opacity-25 px-4 py-2'>
        <div className='flex mx-auto max-w-screen-xl'>
          <Logo />
          <ul className='flex items-center justify-end gap-8 ml-auto'>
            <li>
              <NormalNavLink
                title='Home'
                link='/'></NormalNavLink>
            </li>
            <li>
              <NormalNavLink
                title='Game'
                link='/'></NormalNavLink>
            </li>
            <li>
              <NormalNavLink
                title='About'
                link='/'></NormalNavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
