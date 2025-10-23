class AddForeignKeysToBookings < ActiveRecord::Migration[7.2]
  def change
    add_reference :bookings, :user, null: false, foreign_key: true
    add_reference :bookings, :venue, null: false, foreign_key: true
    add_reference :bookings, :sport, null: false, foreign_key: true
  end
end
