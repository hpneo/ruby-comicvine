class VolumeController < ApplicationController
	
	def show
		@volume ||= ComicVineVolume.find(params[:volume])
		render :json => @volume
	end
	
	def show_issue
		@volume ||= ComicVineVolume.find(params[:volume])
		issue_number = "#{params[:issue]}.#{params[:format]}"
		@issue = @volume.issues.select{|issue| issue.issue_number==issue_number.to_s }.first
		@issue = ComicVineIssue.find(@issue.id)
		render :json => @issue
	end
	
	def search
		if params[:name]
			@volumes ||= ComicVineVolume.search(params[:name])
		end
		render :json => @volumes
	end
end