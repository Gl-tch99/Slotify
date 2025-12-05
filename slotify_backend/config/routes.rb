Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do 
    namespace :v1 do 
      resources :users, only: [:show, :index, :create, :update] do
        resources :bookings, only: [:index]
      end
      resources :roles, only: [:index]
      resources :addresses, only: [:index, :create, :update]
      resources :venues, only: [:index, :create, :update] do
        resources :sports, only: [:index]
        resources :bookings, only: [:index]
        resources :venue_operating_times, only: [:index, :create]
      end
      resources :venue_operating_times, only: [:show, :update]
      resources :sports, only: [:index, :show, :create] do
        resources :venues, only: [:index]
      end
      resources :bookings, only: [:index, :show, :update, :create]
    end
  end

  # Defines the root path route ("/")
  # root "posts#index"
end
