import { VenueCard } from '../components/VenueCard';
import Navbar from '../components/Navbar';
import { SportsFilter } from '../components/SportsFilter';
import { useState } from 'react';

export const VenueListPage: React.FC = () => {
  const mockVenues = [
    {
      id: 1,
      name: 'Sunshine Sports Complex',
      image: undefined, // No image yet
      address: {
        street_1: '123 Sports Avenue',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: 400001,
      },
      distance: 1.5,
      sports: [
        { id: 1, game: 'volleyball' },
        { id: 2, game: 'tennis' },
        { id: 3, game: 'baseball' },
        { id: 4, game: 'football' },
      ],
      rating: {
        average: 4.78,
        count: 53,
      },
      owner_user_id: 1,
    },
    {
      id: 2,
      name: 'Elite Fitness Arena',
      address: {
        street_1: '456 Victory Road',
        city: 'Delhi',
        state: 'Delhi',
        pincode: 110001,
      },
      distance: 2.3,
      sports: [
        { id: 1, game: 'volleyball' },
        { id: 2, game: 'tennis' },
      ],
      rating: {
        average: 4.2,
        count: 28,
      },
      owner_user_id: 2,
    },
    {
      id: 3,
      name: 'Sunshine Sports Complex',
      image: undefined, // No image yet
      address: {
        street_1: '123 Sports Avenue',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: 400001,
      },
      distance: 1.5,
      sports: [
        { id: 1, game: 'volleyball' },
        { id: 2, game: 'tennis' },
        { id: 3, game: 'baseball' },
        { id: 4, game: 'football' },
      ],
      rating: {
        average: 4.78,
        count: 53,
      },
      owner_user_id: 1,
    },
    {
      id: 4,
      name: 'Sunshine Sports Complex',
      image: undefined, // No image yet
      address: {
        street_1: '123 Sports Avenue',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: 400001,
      },
      distance: 1.5,
      sports: [
        { id: 1, game: 'volleyball' },
        { id: 2, game: 'tennis' },
        { id: 3, game: 'baseball' },
        { id: 4, game: 'football' },
      ],
      rating: {
        average: 4.78,
        count: 53,
      },
      owner_user_id: 1,
    },
  ];

  const [selectedSport, setSelectedSport] = useState('');

  const availableSports = [
    ...new Set(mockVenues.flatMap((venue) => venue.sports.map((sport) => sport.game))),
  ];

  return (
    <div className="min-h-screen bg-light-base dark:bg-dark-base">
      <Navbar />
      <SportsFilter
        selectedSport={selectedSport}
        onSportChange={setSelectedSport}
        availableSports={availableSports}
      />

      <div className="container mx-auto px-4 pt-24 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Available Venues ({mockVenues.length})
        </h1>

        {/* Grid that shows max 3 cards horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </div>
  );
};
