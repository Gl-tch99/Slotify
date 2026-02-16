import { type Venue } from '../types/venue';
import { getSportIcon } from '../icons/sportsIcons';

interface VenueCardProps {
  venue: Venue;
}

export const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  const { name, address, sports } = venue;
  console.log(venue);
  return (
    <div className="bg-light-accent dark:bg-dark-accent border border-light-ui dark:border-dark-ui rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="flex gap-4">
        {/* Image Container */}
        <div className="w-24 h-30 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
          <span className="text-xs font-semibold text-light-text dark:text-dark-text">IMAGE</span>
        </div>

        {/* Content Container */}
        <div className="flex-1 min-w-0">
          {/* Venue Name */}
          <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2 truncate">
            {name}
          </h3>

          {/* Address */}
          <div className="flex items-start gap-1 mb-2">
            <span className="text-sm text-light-text dark:text-dark-text wrap-break-words line-clamp-2">
              {address.street_1}, {address.city}, {address.state}, {address.pincode}
            </span>
          </div>

          {/* Sports Icons */}
          <div className="flex items-center gap-2 mb-3">
            {sports?.map((sport) => {
              const SportIcon = getSportIcon(sport.game);
              return (
                <div
                  key={sport.id}
                  className="text-xs text-light-text dark:text-dark-text"
                  title={sport.game}
                >
                  <SportIcon className="w-4 h-4" />
                </div>
              );
            })}
          </div>

          {/* Rating Section */}
          <div className="flex items-center justify-end gap-1 text-sm">
            <span className="font-semibold text-light-text dark:text-dark-text">⭐️ 4.78 (53)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
