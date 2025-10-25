import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import Logo from './Logo';
import SearchBox from './SearchBox';
import wave from '../assets/wave.svg'

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="flex fixed top-5 right-0 left-0 bg-white dark:bg-gray-900 text-black dark:text-amber-50 bg-opacity-20 py-3 px-7 border rounded-2xl bottom-8 gap-7 backdrop-blur-lg w-vh h-max">
          <div className='flex-1/4'>
            <Logo></Logo>
          </div>
          <div className="flex-1/4 p-1.5">
          <SearchBox entity="location"/>
          </div>
          <div className="flex-1/4 p-1.5" id="projects">
            <Link to="/book_venue">Book Venue</Link>
          </div>
          {/* <div className="flex-1/4" id="friends">
          <img src={wave}></img>
          </div> */}
          <ToggleTheme ></ToggleTheme>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
