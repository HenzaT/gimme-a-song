class SongsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home new new_instrument]

  def home
    @two_songs = Song.limit(2)
  end

  def new
    @song_instrument = SongInstrument.new
    @song = Song.new
    @instrument = Instrument.new
  end

  def create
    @song = Song.new(song_params)
    @song.save
    # instruments = ["guitar", "bass", "vocals", "piano", "drums", "drum machine", "synth"].sample
    # then loop through the instruments array to save multiple instruments and songInstruments(@song)
    # @instrument = Instrument.new(instrument_params)
    # instruments = []
    # instruments.each do |i|

    # end
    if @song.save
      # @song_instrument = SongInstrument.create!(song_id: @song.id, instrument_id: @instrument.id)
      @user_idea = UserIdea.create!(user_id: current_user.id, song_id: @song.id)
      redirect_to my_songs_path, notice: "Song successfully saved!"
      return
      # render json: @song, status: :created
    else
      render json: { error: "Failed to save song" }, status: :unprocessable_entity
    end
  end

  def new_instrument
    @instrument = Instrument.new
    @instrument.name = ["guitar", "bass", "vocals", "piano", "drums", "drum machine", "synth"].sample(1).join
  end

  def my_songs
  end

  private

  def song_params
    params.require(:song).permit(:bpm, :mood, :key, :time_signature, :name)
  end

  def instrument_params
    params.require(:instrument).permit(:name)
  end
end
