class PublisherController < ApplicationController
	
	def index
		@publishers ||= ComicVinePublisher.all
		render :json => @publishers
	end
	
	def show
		@publisher ||= ComicVinePublisher.find(params[:publisher])
		render :json => @publisher
	end
end