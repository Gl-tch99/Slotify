class Venue < ApplicationRecord
    has_many :venue_operating_times, dependent: :destroy
    belongs_to :address
    belongs_to :user, foreign_key: :owner_user_id
end