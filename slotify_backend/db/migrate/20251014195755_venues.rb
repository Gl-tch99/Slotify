class Venues < ActiveRecord::Migration[7.2]
  def change
    create_table :venues do |t|
      t.string :name, null:false
      t.timestamps
    end
  end
end
