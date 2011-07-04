class StoryArcController < ApplicationController
	
	def show
		@story_arc = ComicVineStoryArc.find(params[:story_arc])
		render :json => @story_arc
	end
end