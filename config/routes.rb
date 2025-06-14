Rails.application.routes.draw do
  devise_for :users
  root to: "songs#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  resources :songs, only: %i[new create] do
    resources :song_instruments, only: %i[new create]
  end

  get "/my-songs", to: "songs#my_songs"
  resources :user_ideas, only: [:destroy] do
    post :inspire, on: :member
  end
end
