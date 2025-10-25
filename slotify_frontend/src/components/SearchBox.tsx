import PropTypes from 'prop-types'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({entity, width}: {entity: string, width:number}) => {
  return (
    <div className={`relative min-w-${width}`}>
        <input className="border focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 shadow-md border-gray-300 rounded-full p-2 w-full h-full" type="text" placeholder={`Search for a ${entity}`} />
        <button className= "absolute end-0.5 bg-transparent text-blue-500 rounded-full px-4 h-full justify-center items-center hover:bg-amber-50 hover:border-2 hover:border-black"><SearchIcon /></button>
    </div>
  )
}

SearchBox.propTypes = {
  entity: PropTypes.string.isRequired,
}

export default SearchBox