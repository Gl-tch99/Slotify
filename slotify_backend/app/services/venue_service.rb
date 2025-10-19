class VenueService
    def initialize(venue_params)
        @venue_params = venue_params
    end

    def create_venue
        ActiveRecord::Base.transaction do
            venue = Venue.create!(@venue_params)
            return venue
        end
    end
end