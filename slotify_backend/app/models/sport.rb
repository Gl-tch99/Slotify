class Sport < ApplicationRecord
    validates :game, presence: true, uniqueness: true
    has_and_belongs_to_many :venues
end