class WelcomeController < ApplicationController
  def index
    render :layout => !request.xhr?
  end

  def artists
    render :layout => !request.xhr?
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
