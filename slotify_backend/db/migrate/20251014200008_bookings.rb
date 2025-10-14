class Bookings < ActiveRecord::Migration[7.2]
  def change
    create_table :bookings do |t|
      t.datetime :start_time,null:false
      t.datetime :end_time,null:false
      t.timestamps
    end
  end
end
