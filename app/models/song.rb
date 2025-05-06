class Song < ApplicationRecord
  has_many :SongInstruments, dependent: :destroy
  has_many :instruments, through: :SongInstruments
  has_many :UserIdeas, dependent: :destroy
  has_many :users, through: :UserIdeas
  validates :time_signature, :name, presence: true
  validates :time_signature, inclusion: { in: %w[4/4 3/4 5/4 6/8 7/8 9/8 6/4] }

  def ai_inspiration
    client = OpenAI::Client.new
    chatgpt_response = client.chat(parameters: {
      model: "gpt-4o-mini",
      messages: [
        { role: "user",
          content: "Give me up to 5 songs that have the same #{time_signature}.
          Give me just the song name, with a spotify link and youtube link as urls."
        }
      ]
    })
    return chatgpt_response["choices"][0]["message"]["content"]
  end
end
