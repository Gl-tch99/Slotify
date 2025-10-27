import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import Logo from './Logo';
import SetLocation from './SetLocation';

const Navbar = () => {
  return (
    <>
      <nav className="sticky flex h-max w-screen items-center top-0 left-0 right-0 bg-light-accent dark:bg-dark-accent text-black dark:text-amber-50 bg-opacity-20 py-3 px-7 bottom-8 gap-7 backdrop-blur-lg">
        <div className="flex flex-1/2 gap-5 text-light-ui dark:text-dark-ui">
          <Logo />
          <div className="w-full flex">
            <SetLocation />
          </div>
        </div>
        <div className="flex-1/2 flex justify-end gap-5 text-light-ui dark:text-dark-ui">
          <div id="projects">
            <Link to="/book_venue">Book Venue</Link>
          </div>
          <div className="" id="projects">
            <ToggleTheme />
          </div>
          <div id="projects">
            <Link to="/login">Login/Sign-up</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
