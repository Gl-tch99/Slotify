class Api::V1::SportsController < ApplicationController
    before_action :set_sport, only: [:show]
    before_action :set_venue, only: [:index]
    def index
        if @venue
            @sports = @venue.sports
        else
            @sports = Sport.all
        end
        render json: @sports, status: :ok
    end

    def show
        render json: @sport, status: :ok
    end

    def create
        @sport = Sport.new(sport_params)
        if @sport.save
            render json: @sport, status: :created
        else
            render json: { errors: @sport.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def sport_params
        params.require(:sport).permit(:game)
    end

    def set_sport
        @sport = Sport.find(params[:id])
    rescue ActiveRecord::RecordNotFound 
        render json: { error: "Sport not found, Please pass correct sport id" }, status: :not_found
    end


    def set_venue
        if params[:venue_id]
            @venue = Venue.find_by(id: params[:venue_id])
            render json: { error: "Venue not found. Please provide a valid venue_id" }, status: :not_found unless @venue
        end
    end

end