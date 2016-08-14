Rails.application.routes.draw do

  # This line mounts Spree's routes at the root of your application.
  # This means, any requests to URLs such as /products, will go to Spree::ProductsController.
  # If you would like to change where this engine is mounted, simply change the :at option to something different.
  #
  # We ask that you don't use the :as option here, as Spree relies on it being the default of "spree"
        
  root 'welcome#index'
  get '/artists', to: 'welcome#artists', as: 'artists'
  get '/radio', to: 'welcome#radio', as: 'radio'
  
  get 'contact' => 'contact#index'

  mount Spree::Core::Engine, :at => '/store'
end
