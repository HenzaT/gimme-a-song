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
UserIdea.destroy_all
Song.destroy_all
Instrument.destroy_all

puts "creating songs..."
happy = Song.create!(mood: "happy", key: "D minor", bpm: 120, time_signature: "4/4", name: "happy song")
sad = Song.create!(mood: "sad", key: "A major", bpm: 90, time_signature: "5/4", name: "sad song")
energetic = Song.create!(mood: "energetic", key: "C# major", bpm: 144, time_signature: "7/8", name: "energetic song")
slow = Song.create!(mood: "slow", key: "D minor", bpm: 110, time_signature: "6/4", name: "slow song")
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
SongInstrument.create!(song_id: happy.id, instrument_id: guitar.id)

SongInstrument.create!(song_id: sad.id, instrument_id: bass.id)

SongInstrument.create!(song_id: energetic.id, instrument_id: piano.id)

SongInstrument.create!(song_id: slow.id, instrument_id: synth.id)

puts "created song ideas!"

puts "finished seeding"
