class WelcomeController < ApplicationController
  def index
    render 'index'
  end

  def artists
    render 'artists'
  end
end
