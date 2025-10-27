import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const SetLocation = () => {
  return (
    <div className={`relative min-w-2/3`}>
      <input
        className="focus:border-none focus:outline-none focus:ring-2 focus:ring-light-ui dark:focus:ring-dark-ui focus:shadow-l focus:shadow-light-ui dark:focus:shadow-dark-ui transition duration-200 shadow-md border-2 border-light-ui dark:border-dark-ui rounded-full p-2 pl-5 w-full h-full"
        type="text"
        placeholder={`Set Your Location...`}
      />
      <button className="absolute end-0 bg-transparent text-light-ui dark:text-dark-ui rounded-full px-4 h-full justify-center items-center hover:bg-light-ui hover:text-amber-50 dark:hover:bg-dark-ui dark:hover:text-amber-50">
        <AddLocationAltIcon />
      </button>
    </div>
  );
};

export default SetLocation;
