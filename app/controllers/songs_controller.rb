class SongsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home new]

  def home
    @songs = Song.limit(3)
  end

  def new
    @song = Song.new
    @song.time_signature = %w[4/4 3/4 5/4 6/8 6/4 7/8 9/8].sample(1).join
    @song.bpm = rand(60..190)
    @song.mood = %w[sad happy energetic slow fast silly sombre complex].sample(1).join
    @instrument = Instrument.new
    @instrument.name = ["guitar", "bass", "vocals", "piano", "drums", "drum machine", "synth"].sample(1).join
  end

  def create
    Song.create(mood: params[:mood], bpm: params[:bpm], key: params[:key], time_signature: params[:time_signature])
    redirect_to my_songs_path
  end

  def my_songs
  end

  private

  def songs_params
    params.require(:song).permit(:time_signature, :bpm, :mood)
  end
end
