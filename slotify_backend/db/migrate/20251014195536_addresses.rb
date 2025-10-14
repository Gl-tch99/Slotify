class Addresses < ActiveRecord::Migration[7.2]
  def change
    create_table :addresses do |t|
      t.string :street_1,null:false
      t.string :street_2
      t.string :city,null:false
      t.string :state,null:false
      t.integer :pincode,null:false
      t.timestamps
    end
  end
end
