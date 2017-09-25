Rails.application.routes.draw do
  resources :meals
  resources :users

  root to: 'application#angular_home'

end
