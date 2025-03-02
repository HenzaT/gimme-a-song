class Instrument < ApplicationRecord
  has_many :SongInstruments
  has_many :songs, through: :SongInstruments
  validates :name, presence: true
  validates :name, inclusion: { in: ["guitar", "bass", "vocals", "piano", "drums", "drum machine", "synth"] }
end
