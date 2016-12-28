Rails.application.routes.draw do
  root 'events#index'

  resources :events, only: [:index, :create, :update, :destroy] do
    get :search, on: :collection
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
