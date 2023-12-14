import colors from 'tailwindcss/colors';
import NormalNavLink from './NormalNavLink';

const Footer = () => {
  return (
    <footer className='flex items-center bg-indigo-400 bg-opacity-25 px-4 py-2 mt-auto h-auto'>
      <nav className='flex flex-col mx-auto sm:flex-row sm:justify-between w-full max-w-screen-xl'>
        <p className='mr-auto text-indigo-400'>
          Austin Hagel ©{new Date().getFullYear()}
        </p>
        <ul className='flex flex-wrap justify-start items-start gap-4 mt-4 sm:mt-0 sm:gap-8 sm:ml-auto'>
          <li>
            <NormalNavLink
              link='https://github.com/gmni-dev/RTT-WordGuess'
              title='Repository'>
              <box-icon
                type='logo'
                name='github'
                color={colors.slate[200]}></box-icon>
            </NormalNavLink>
          </li>
          <li>
            <NormalNavLink
              link='https://austin.fo/linkedin'
              title='LinkedIn'>
              <box-icon
                type='logo'
                name='linkedin'
                color={colors.slate[200]}></box-icon>
            </NormalNavLink>
          </li>
          <li>
            <NormalNavLink
              link='https://austin.fo/'
              title='Austin H.'>
              <box-icon
                name='link-external'
                color={colors.slate[200]}></box-icon>
            </NormalNavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
