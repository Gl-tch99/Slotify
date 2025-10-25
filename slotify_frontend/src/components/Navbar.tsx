import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import Logo from './Logo';
import SearchBox from './SearchBox';
import wave from '../assets/wave.svg';

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="flex items-center fixed top-5 right-0 left-0 bg-white dark:bg-gray-900 text-black dark:text-amber-50 bg-opacity-20 py-3 px-7 border rounded-2xl bottom-8 gap-7 backdrop-blur-lg w-vh h-max">
          <div className="flex flex-1/2">
            <div>
              <Logo />
            </div>
            <div className="w-full flex">
              <SearchBox entity="location" width={96} />
            </div>
          </div>
          <div className="flex-1/2 flex justify-end">
            <div className="px-3" id="projects">
              <Link to="/book_venue">Book Venue</Link>
            </div>
            {/* <div className="flex-1/4" id="friends">
            <img src={wave}></img>
            </div> */}
            <div className="" id="projects">
              <ToggleTheme />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
