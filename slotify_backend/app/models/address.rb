class Address < ApplicationRecord
    validates :street_1, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :pincode, presence: true
    has_one :venue
end