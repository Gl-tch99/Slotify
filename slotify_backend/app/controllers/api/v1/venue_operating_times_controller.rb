class Api::V1::VenueOperatingTimesController < ApplicationController
    before_action :set_operting_time, only: [:update]
    before_action :get_venue_operating_times_by_venue_id, only: [:index]

    def index
        render json: @operating_times, status: :ok
    end

    def create
        @operating_times = VenueOperatingTime.create!(venue_operating_times_params)
        render json: @operating_times, status: :created
    end
    
    def update
        if @operating_time
            if @operating_time.update(venue_operating_times_params.to_json(except: :venue_id))
                render json: @operating_time, status: :ok
            else
                render json: {errors: error.message }, status: :unprocessable_entity
            end
        else
            render json: {error: "Venue Operating Time not found" }, status: :unprocessable_entity
        end
    end

    private

    def venue_operating_times_params
        params.require(:venue_operating_time).permit(:opening_time, :closing_time, :venue_id).merge(venue_id: params[:venue_id])
    end

    def set_operting_time
        @operating_time = VenueOperatingTime.find(params[:id])
    end

    def get_venue_operating_times_by_venue_id
        @operating_times = VenueOperatingTime.where(venue_id: params[:venue_id])
    end
end