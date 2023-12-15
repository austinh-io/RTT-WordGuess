import Logo from './Logo';
import StyledLink from './StyledLink';

const Navigation = () => {
  return (
    <>
      <nav className=' bg-slate-900 px-4 py-2'>
        <div className='flex mx-auto max-w-screen-xl'>
          <Logo />
          <ul className='flex items-center justify-end gap-4 ml-auto'>
            <li>
              <StyledLink
                text='Home'
                uri='/'></StyledLink>
            </li>
            <li>
              <StyledLink
                text='Game'
                uri='/game'></StyledLink>
            </li>
            <li>
              <StyledLink
                text='About'
                uri='/about'></StyledLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
