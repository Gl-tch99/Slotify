class Api::V1::VenuesController < ApplicationController
    before_action :get_venue, only: [:update]
    def index
        @venues = Venue.all

        render json: @venues.to_json(include: :address, except: :address_id), status: :ok
    end

    def create
        @venue = Venue.new(venue_params)
        if @venue.save
            render json: @venue, status: :created
        else
            render json: @venue.errors.full_messages, status: :unprocessable_entity
        end
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
        params.require(:venue).permit(:name, :address_id, :owner_user_id)
    end

    def get_venue
        @venue = Venue.find(params[:id])
    end
end
