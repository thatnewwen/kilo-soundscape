class WelcomeController < ApplicationController
  def index
    render 'index'
  end

  def artists
    render 'artists'
  end

  def radio
    client = Soundcloud.new(:client_id => ENV['CLIENT_ID'])
    @tracks = client.get('/users/14533601/tracks')
    if request.xhr?
      render json: { tracks: @tracks }
    else
      render layout: false
    end
  end
end
