class AddRoleIdToUsers < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :role, null: true, foreign_key: true
  end
end
