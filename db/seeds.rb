# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

puts "cleaning database..."
SongInstrument.destroy_all
Song.destroy_all
Instrument.destroy_all

puts "creating songs..."
happy = Song.create!(mood: "happy", key: "D minor", bpm: 120, time_signature: "4/4")
sad = Song.create!(mood: "sad", key: "A major", bpm: 90, time_signature: "5/4")
energetic = Song.create!(mood: "energetic", key: "C# major", bpm: 144, time_signature: "7/8")
slow = Song.create!(mood: "slow", key: "D minor", bpm: 110, time_signature: "6/4")
puts "created songs!"

puts "creating instruments..."
guitar = Instrument.create!(name: "guitar")
bass = Instrument.create!(name: "bass")
drums = Instrument.create!(name: "drums")
vocals = Instrument.create!(name: "vocals")
drum_machine = Instrument.create!(name: "drum machine")
synth = Instrument.create!(name: "synth")
piano = Instrument.create!(name: "piano")
puts "created instruments!"

puts "creating song ideas..."
SongInstrument.create!(name: "happy song", song_id: happy.id, instrument_id: guitar.id)
SongInstrument.create!(name: "happy song", song_id: happy.id, instrument_id: bass.id)
SongInstrument.create!(name: "happy song", song_id: happy.id, instrument_id: drums.id)
SongInstrument.create!(name: "happy song", song_id: happy.id, instrument_id: vocals.id)

SongInstrument.create!(name: "sad song", song_id: sad.id, instrument_id: bass.id)
SongInstrument.create!(name: "sad song", song_id: sad.id, instrument_id: drums.id)
SongInstrument.create!(name: "sad song", song_id: sad.id, instrument_id: drum_machine.id)

SongInstrument.create!(name: "energetic song", song_id: energetic.id, instrument_id: piano.id)
SongInstrument.create!(name: "energetic song", song_id: energetic.id, instrument_id: guitar.id)
SongInstrument.create!(name: "energetic song", song_id: energetic.id, instrument_id: drums.id)
SongInstrument.create!(name: "energetic song", song_id: energetic.id, instrument_id: bass.id)
SongInstrument.create!(name: "energetic song", song_id: energetic.id, instrument_id: vocals.id)

SongInstrument.create!(name: "slow song", song_id: slow.id, instrument_id: synth.id)
SongInstrument.create!(name: "slow song", song_id: slow.id, instrument_id: drum_machine.id)

puts "created song ideas!"

puts "finished seeding"
