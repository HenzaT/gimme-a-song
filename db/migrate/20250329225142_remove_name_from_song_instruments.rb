class RemoveNameFromSongInstruments < ActiveRecord::Migration[7.1]
  def change
    remove_column :song_instruments, :name, :string
  end
end
