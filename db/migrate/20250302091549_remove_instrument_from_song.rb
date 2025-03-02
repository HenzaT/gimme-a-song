class RemoveInstrumentFromSong < ActiveRecord::Migration[7.1]
  def change
    remove_column :songs, :instrument, :string
  end
end
