import colors from 'tailwindcss/colors';
import StyledLink from './StyledLink';

const Footer = () => {
  return (
    <footer className='flex items-center bg-slate-900 px-4 py-4 mt-auto h-auto'>
      <nav className='flex flex-col mx-auto sm:flex-row sm:justify-between w-full max-w-screen-xl'>
        <ul className='flex flex-wrap justify-start items-start gap-4 mt-4 sm:mt-0 sm:gap-8 sm:mr-auto'>
          <li>
            <StyledLink
              uri='https://github.com/gmni-dev/RTT-WordGuess'
              text='Repository'
              newTab={true}>
              <box-icon
                type='logo'
                name='github'
                color={colors.indigo[100]}></box-icon>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              uri='https://austin.fo/linkedin'
              text='LinkedIn'
              newTab={true}>
              <box-icon
                type='logo'
                name='linkedin'
                color={colors.indigo[100]}></box-icon>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              uri='https://austin.fo/'
              text='Austin H.'
              newTab={true}>
              <box-icon
                name='link-external'
                color={colors.indigo[100]}></box-icon>
            </StyledLink>
          </li>
        </ul>
        <p className='sm:ml-auto sm:mt-0 mt-4 text-indigo-100'>
          Austin Hagel ©{new Date().getFullYear()}
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
