class Api::V1::BookingsController < ApplicationController
  before_action :set_booking, only: [:show, :update]

  def index
    if params[:venue_id]
      # Nested route: /api/v1/venues/:venue_id/bookings
      venue = Venue.find(params[:venue_id])
      @bookings = venue.bookings
    elsif params[:user_id]
      # Nested route: /api/v1/users/:user_id/bookings
      user = User.find(params[:user_id])
      @bookings = user.bookings
    else
      # Regular route: /api/v1/bookings
      @bookings = Booking.all
    end
      
    render json: @bookings.to_json(include: [:user, :venue, :sport]), status: :ok
  end

  def show
    render json: @booking, status: :ok
  end

  def create
    booking = BookingService.new(booking_params).create_booking
    render json: booking, status: :created
  rescue => error
    render json: {errors: error.message}, status: :unprocessable_entity
  end

  def update
    if @booking
      if @booking.update(booking_params)
        render json: @booking, status: :ok
      else
        render json: { errors: @booking.errors.full_message }, status: :unprocessable_entity
      end
    else
      render json: { errors: "Booking not found." }, status: :unprocessable_entity
    end
  end


  private

  def set_booking
    @booking = Booking.find(params[:id])
  end

  def booking_params
    params.require(:booking).permit(:start_time, :end_time, :status, :user_id, :venue_id, :sport_id)
  end
end