import PropTypes from 'prop-types'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({entity}: {entity: string}) => {
  return (
    <div className="relative">
        <input className="border border-gray-300 rounded-full p-2 w-full h-full" type="text" placeholder={`Search for a ${entity}`} />
        <button className= "absolute end-0.5 bg-transparent text-blue-500 rounded-full px-4 h-full justify-center items-center hover:bg-amber-50 hover:border-2 hover:border-black"><SearchIcon /></button>
    </div>
  )
}

SearchBox.propTypes = {
  entity: PropTypes.string.isRequired,
}

export default SearchBox