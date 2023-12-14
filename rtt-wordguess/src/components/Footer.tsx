import colors from 'tailwindcss/colors';
import FooterLink from './FooterLink';

const Footer = () => {
  return (
    <footer className='flex items-center bg-indigo-400 bg-opacity-25 px-16 py-2 mt-auto h-16'>
      <nav className='flex justify-around w-full'>
        <p className='mr-auto text-indigo-400'>
          Austin Hagel ©{new Date().getFullYear()}
        </p>
        <ul className='flex items-center justify-end gap-8 ml-auto'>
          <li>
            <FooterLink
              link='https://github.com/gmni-dev/RTT-WordGuess'
              title='Project GitHub'>
              <box-icon
                type='logo'
                name='github'
                color={colors.slate[200]}></box-icon>
            </FooterLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
