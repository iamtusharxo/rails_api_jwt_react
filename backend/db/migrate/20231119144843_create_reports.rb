# db/migrate/<timestamp>_create_reports.rb

class CreateReports < ActiveRecord::Migration[7.0]
  def change
    create_table :reports do |t|
      t.string :title
      t.timestamps
    end

    create_table :reports_users, id: false do |t|
      t.belongs_to :user
      t.belongs_to :report
    end

    add_index :reports_users, [:user_id, :report_id]
    add_index :reports_users, [:report_id, :user_id]
  end
end
