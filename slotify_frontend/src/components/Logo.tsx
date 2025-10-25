import slot from '../assets/Adobe_Express_-_file.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src={slot} className="h-10 w-10"></img>
    </Link>
  );
};

export default Logo;
