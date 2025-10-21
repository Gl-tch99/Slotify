class Booking < ApplicationRecord
  validates :start_time, :end_time, :status, presence: true
  enum :status, { 
    pending: 'pending', 
    confirmed: 'confirmed', 
    cancelled: 'cancelled' 
  }
  belongs_to :user
  belongs_to :venue
  belongs_to :sport
end