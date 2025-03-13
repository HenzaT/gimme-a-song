class SongsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home new]

  def home
    @two_songs = Song.limit(2)
  end

  def new
    @songinstrument = SongInstrument.new
    @song = Song.new
    @song.time_signature = %w[4/4 3/4 5/4 6/8 6/4 7/8 9/8].sample(1).join
    # @song.bpm = rand(60..190)
    @song.mood = %w[sad happy energetic slow fast silly sombre complex].sample(1).join
    @instrument = Instrument.new
    @instrument.name = ["guitar", "bass", "vocals", "piano", "drums", "drum machine", "synth"].sample(1).join
  end

  def create
    current_song = Song.new(mood: params[:mood], bpm: params[:bpm], key: params[:key], time_signature: params[:time_signature])
    current_song.save

    current_id = current_user.id
    current_idea = UserIdea.create(user_id: current_id, song_id: current_song.id)

    current_instrument = Instrument.new(name: params[:name])
    current_instrument.save!

    SongInstrument.create(song_id: current_song.id, instrument_id: current_instrument.id)

    # current_instrument = Instrument.create(name: params[:name])
    # @idea = UserIdea.new(user_id: current_user.id, song_id: current_song.id)
    # @idea.save
    # SongInstrument.create(name: "test", song_id: current_song.id, instrument_id: current_instrument.id)
    redirect_to my_songs_path
  end

  def edit
    @song = Song.find(params[:id])
  end

  def update
    @song = Song.find(params[:id])
    @song.bpm = rand(60..190)
    @song.update(bpm: params[@song.bpm])
  end

  def my_songs
  end

  private

  def songs_params
    params.require(:song).permit(:time_signature, :bpm, :mood)
  end
end
