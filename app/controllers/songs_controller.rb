class SongsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home new]

  def home
    song_ideas = SongInstrument.all
    random_ideas = []
    song_ideas.map do |s|
      random_ideas << s
    end
    @random_idea_one = random_ideas.flatten.sample
    @random_idea_two = random_ideas.flatten.sample
  end

  def new
    @song_instrument = SongInstrument.new
    @song = Song.new
  end

  def create
    @song = Song.new(song_params)
    instruments = ["guitar", "bass", "vocals", "piano", "drums", "drum machine", "synth"]
    if @song.save
      if params[:instrument_name].present? && instruments.include?(params[:instrument_name])
        instrument = Instrument.find_by(name: params[:instrument_name])
        SongInstrument.create(song: @song, instrument: instrument) if instrument.present?
      end
      @user_idea = UserIdea.create!(user_id: current_user.id, song_id: @song.id)
      redirect_to my_songs_path, notice: "Song successfully saved!"
    else
      render json: { error: "Failed to save song" }, status: :unprocessable_entity
    end
  end

  def my_songs
    ideas = current_user.UserIdeas
    @sorted_ideas = ideas.order(created_at: :desc)
  end

  private

  def song_params
    params.require(:song).permit(:bpm, :mood, :key, :time_signature, :name)
  end

  def instrument_params
    params.require(:instrument).permit(:name)
  end
end
