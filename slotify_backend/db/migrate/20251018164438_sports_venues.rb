class SportsVenues < ActiveRecord::Migration[7.2]
  def change
    create_table :sports_venues, id: false do |t|
      t.belongs_to :sport, null: false, foreign_key: true
      t.belongs_to :venue, null: false, foreign_key: true
    end
    add_index :sports_venues, [:sport_id, :venue_id], unique: true
  end
end
