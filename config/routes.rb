Rails.application.routes.draw do
  devise_for :users
  root to: "songs#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  resources :songs, only: [:new, :create]
  get "/my-songs", to: "songs#my_songs"
  get "/songs/new-instruments", to: "songs#new_instrument"

  # Defines the root path route ("/")
  # root "posts#index"
end
