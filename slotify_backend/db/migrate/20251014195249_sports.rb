class Sports < ActiveRecord::Migration[7.2]
  def change
    create_table :sports do |t|
      t.string :game, null:false
      t.timestamps
    end
    add_index :sports, :game, unique:true
  end
end
