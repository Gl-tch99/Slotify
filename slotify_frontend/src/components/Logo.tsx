import slot from '../assets/Adobe_Express_-_file.png';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex top-5 justify-center items-center">
        <HomeIcon className="m-2" />
      </div>
    </Link>
  );
};

export default Logo;
