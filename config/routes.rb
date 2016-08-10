Rails.application.routes.draw do

  root 'welcome#index'
  mount Spree::Core::Engine, :at => '/store'
end
