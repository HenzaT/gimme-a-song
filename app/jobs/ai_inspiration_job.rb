class AiInspirationJob < ApplicationJob
  queue_as :default

  def perform(idea_id)
    idea = UserIdea.find(idea_id)
    time_signature = idea.song.time_signature
    response = ai_inspiration(time_signature)

    Rails.logger.info("🎵 Inspiration: #{response}")
    Rails.cache.write("generated_song_#{idea.id}", response)
  end

  private

  def ai_inspiration(time_signature)
    client = OpenAI::Client.new
    chatgpt_response = client.chat(parameters: {
      model: "gpt-4o-mini",
      messages: [
        { role: "user",
          content: "Give me up to 3 songs where most of the song is in this #{time_signature}.
          If a song is not mostly in this #{time_signature}, do not give it in the response.
          Get the songs from wikipedia.
          Solsbury Hill is in 7/8 time signature!
          Give me the song name and a short description of how it is in that #{time_signature}.
          Give me the response as a JSON" }
        ]
    })
    return chatgpt_response["choices"][0]["message"]["content"]
  end
end
