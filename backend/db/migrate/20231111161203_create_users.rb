class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :line_id
      t.integer :message_send_time
      t.timestamps
    end
  end
end