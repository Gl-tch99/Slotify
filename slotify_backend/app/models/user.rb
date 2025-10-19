class User < ApplicationRecord
    has_secure_password
    VALID_EMAIL_REGEX = /\A(?!.*\.\.)[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    validates :email, presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }
    validates :username, presence: true, uniqueness: true
    validates :phone_number, presence: true, uniqueness: true
    has_and_belongs_to_many :roles
    accepts_nested_attributes_for :roles
end