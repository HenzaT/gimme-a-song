class CreateSongInstruments < ActiveRecord::Migration[7.1]
  def change
    create_table :song_instruments do |t|
      t.references :song, null: false, foreign_key: true
      t.references :instrument, null: false, foreign_key: true

      t.timestamps
    end
  end
end
