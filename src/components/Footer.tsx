import colors from 'tailwindcss/colors';
import StyledLink from './StyledLink';

const Footer = () => {
  return (
    <footer className='flex items-center bg-indigo-400 bg-opacity-25 px-4 py-2 mt-auto h-auto min-h-[4rem]'>
      <nav className='flex flex-col mx-auto sm:flex-row sm:justify-between w-full max-w-screen-xl'>
        <p className='mr-auto text-indigo-300'>
          Austin Hagel ©{new Date().getFullYear()}
        </p>
        <ul className='flex flex-wrap justify-start items-start gap-4 mt-4 sm:mt-0 sm:gap-8 sm:ml-auto'>
          <li>
            <StyledLink
              uri='https://github.com/gmni-dev/RTT-WordGuess'
              text='Repository'
              newTab={true}>
              <box-icon
                type='logo'
                name='github'
                color={colors.slate[200]}></box-icon>
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
                color={colors.slate[200]}></box-icon>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              uri='https://austin.fo/'
              text='Austin H.'
              newTab={true}>
              <box-icon
                name='link-external'
                color={colors.slate[200]}></box-icon>
            </StyledLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
