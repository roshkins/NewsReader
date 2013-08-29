NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create] do
    resources :entries, only: [:index]
  end
  resources :user, only: [:create]
  resource :session, only: [:create, :destroy]
  root to: "feeds#index"
end
