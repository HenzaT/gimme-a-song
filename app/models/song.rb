class Song < ApplicationRecord
  # before_create :assign_random_bpm

  has_many :SongInstruments
  has_many :instruments, through: :SongInstruments
  has_many :UserIdeas
  has_many :users, through: :UserIdeas
  validates :time_signature, :name, presence: true
  validates :time_signature, inclusion: { in: %w[4/4 3/4 5/4 6/8 7/8 9/8 6/4] }
  # def assign_random_bpm
  #   self.bpm = rand(60..190)
  # end
end
