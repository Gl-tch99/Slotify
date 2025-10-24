import slot from '../assets/Adobe_Express_-_file.png';
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
        <img src={slot} width="50" height="50"></img>
    </Link>
  )
}

export default Logo