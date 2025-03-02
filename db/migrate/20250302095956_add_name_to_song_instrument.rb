class AddNameToSongInstrument < ActiveRecord::Migration[7.1]
  def change
    add_column :song_instruments, :name, :string
  end
end
