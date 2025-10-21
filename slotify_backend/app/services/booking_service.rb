class BookingService
  def initialize(booking_params)
    @booking_params = booking_params
  end

  def create_booking
    ActiveRecord::Base.transaction do
      booking = Booking.create!(@booking_params)
      return booking
    end
  end
end