class VenueOperatingTime < ApplicationRecord
    belongs_to :venue
    validates :opening_time, presence: true
    validates :closing_time, presence: true
end