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
    @instrument = Instrument.new(instrument_params)
    if @song.save && @instrument.save
      @song_instrument = SongInstrument.create!(song_id: @song.id, instrument_id: @instrument.id)
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

  def song_params
    params.require(:song).permit(:time_signature, :bpm, :mood, :key)
  end

  def instrument_params
    params.require(:instrument).permit(:name)
  end
end
