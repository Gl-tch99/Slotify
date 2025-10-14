class Users < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|
      t.string :username, null:false
      t.string :email, null:false
      t.string :phone_number, null:false
      t.string :first_name, null:false
      t.string :last_name, null:false
      t.string :password_digest, null:false
      t.timestamps
    end
    add_index :users, :username, unique:true
    add_index :users, :email, unique:true
    add_index :users, :phone_number, unique:true
  end
end
