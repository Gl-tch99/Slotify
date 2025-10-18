class AddForeignKeysToVenues < ActiveRecord::Migration[7.2]
  def change
    add_reference :venues, :address, null: false, foreign_key: true
    add_reference :venues, :user, null: false, foreign_key: true
    rename_column :venues, :user_id, :owner_user_id
  end
end
