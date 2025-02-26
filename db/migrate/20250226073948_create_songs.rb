class CreateSongs < ActiveRecord::Migration[7.1]
  def change
    create_table :songs do |t|
      t.string :instrument
      t.string :mood
      t.string :key
      t.integer :bpm
      t.string :time_signature

      t.timestamps
    end
  end
end
