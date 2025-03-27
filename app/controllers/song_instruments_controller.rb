class SongInstrumentsController < ApplicationController
  def new
    @song_instrument = SongInstrument.new
    @song = Song.find(params[:id])
    @instrument = Instrument.new
  end

  def create
    @song_instrument = SongInstrument.new
    @song = Song.find(params[:id])
  end
end
