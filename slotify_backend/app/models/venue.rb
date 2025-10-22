class Venue < ApplicationRecord
  validates :name, presence: true
  has_many :venue_operating_times, dependent: :destroy
  belongs_to :address
  accepts_nested_attributes_for :address
  accepts_nested_attributes_for :venue_operating_times
  belongs_to :user, foreign_key: :owner_user_id
  
  has_and_belongs_to_many :sports
  has_many :bookings
end