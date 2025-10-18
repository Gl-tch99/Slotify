class VenueOperatingTimes < ActiveRecord::Migration[7.2]
  def change
    create_table :venue_operating_times do |t|
      t.belongs_to :venue, null: false, foreign_key: true
      t.time :opening_time, null: false
      t.time :closing_time, null: false
      t.timestamps
    end
  end
end
