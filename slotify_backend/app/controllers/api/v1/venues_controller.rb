class Api::V1::VenuesController < ApplicationController
    before_action :get_venue, only: [:update]
    before_action :set_sport, only: [:index]
    def index
        if @sport
            @venues = @sport.venues
        else
            @venues = Venue.all
        end
        render json: @venues.to_json(include: :address, except: :address_id), status: :ok
    end

    def create
        venue = VenueService.new(venue_params).create_venue
        render json: venue.to_json(include: :address, except: :address_id), status: :created
        rescue => error
            render json: {errors: error.message}, status: :unprocessable_entity
    end

    def update
        if @venue
            if @venue.update(venue_params)
                render json: @venue, status: :ok
            else
                render json: @venue.errors.full_messages, status: :unprocessable_entity
            end
        else
            render json: { errors: "Venue not found." }, status: :unprocessable_entity
        end
    end

    private

    def venue_params
        params.require(:venue).permit(:name, :address_id, :owner_user_id, address_attributes: [:street_1, :street_2, :city, :state, :pincode])
    end

    def set_sport
        if params[:sport_id]
            @sport = Sport.find_by(id: params[:sport_id])
            render json: { error: "Sport not found. Please provide a valid sport_id" }, status: :not_found unless @sport
        end
    end


    def get_venue
        @venue = Venue.find(params[:id])
    end
end
