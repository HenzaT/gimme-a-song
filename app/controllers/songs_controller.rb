class SongsController < ApplicationController
  def home
    @songs = Song.all
  end

  def new
    @song = Song.new
    @song.time_signature = %w[4/4 3/4 5/4 6/8 7/8 9/8].sample(1).join
    @song.bpm = rand(60..190)
  end
end
