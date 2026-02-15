import type React from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
interface SportsFilterProps {
  selectedSport: string;
  onSportChange: (sport: string) => void;
  availableSports: string[];
}

export const SportsFilter: React.FC<SportsFilterProps> = ({
  selectedSport,
  onSportChange,
  availableSports,
}) => {
  return (
    <div className="relative">
      <select
        value={selectedSport}
        onChange={(e) => onSportChange(e.target.value)}
        className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                   text-gray-900 dark:text-white px-4 py-3 pr-8 rounded-xl 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[140px]"
      >
        <option value="">Sports</option>
        {availableSports.map((sport) => (
          <option key={sport} value={sport}>
            {sport.charAt(0).toUpperCase() + sport.slice(1)}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <KeyboardArrowDown className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};
