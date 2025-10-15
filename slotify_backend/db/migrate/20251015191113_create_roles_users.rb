class CreateRolesUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :roles_users, id: false do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :role, null: false, foreign_key: true
    end
  end
end
