class Song < ApplicationRecord
  has_many :SongInstruments, dependent: :destroy
  has_many :instruments, through: :SongInstruments
  has_many :UserIdeas, dependent: :destroy
  has_many :users, through: :UserIdeas
  validates :time_signature, :name, presence: true
  validates :time_signature, inclusion: { in: %w[4/4 3/4 5/4 6/8 7/8 9/8 6/4] }

  private

  def time_signature_inspiration
    AiInspirationJob.perform_later(self)
  end
end
