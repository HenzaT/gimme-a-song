class Song < ApplicationRecord
  validates :instrument, :time_signature, presence: true
  validates :instrument, inclusion: { in: ['guitar', 'bass', 'drums', 'vocals', 'synth', 'drum machine', 'piano'] }
  validates :time_signature, inclusion: { in: %w[4/4 3/4 5/4 6/8 7/8 9/8] }
end
