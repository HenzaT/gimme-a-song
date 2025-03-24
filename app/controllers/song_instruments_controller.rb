class SongInstrumentsController < ApplicationController
  def new
    @song_instrument = SongInstrument.new
    @song = Song.new
    @instrument = Instrument.new
  end

  def create
  end
end
