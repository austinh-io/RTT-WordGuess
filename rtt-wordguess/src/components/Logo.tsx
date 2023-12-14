import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <div className='logo'>
        <Link to='/'>
          <img
            src='https://via.placeholder.com/150'
            alt='logo'
            className='w-12 h-12 rounded'
          />
        </Link>
      </div>
    </>
  );
};

export default Logo;
