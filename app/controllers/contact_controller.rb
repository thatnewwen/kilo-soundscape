class ContactController < ApplicationController
	def index
    render :layout => !request.xhr?
	end
end