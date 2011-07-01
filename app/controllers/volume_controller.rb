class VolumeController < ApplicationController
	
	def show
		@volume = ComicVineVolume.find(params[:volume])
		render :json => @volume if params[:output]=='json'
	end
	
	def show_issue
		@volume ||= ComicVineVolume.find(params[:volume])
		issue_number = "#{params[:issue]}.#{params[:format]}"
		@issue = @volume.issues.select{|issue| issue.issue_number==issue_number.to_s }.first
		@issue = ComicVineIssue.find(@issue.id)
		puts params.inspect
		render :json => @issue if params[:output]=='json'
	end
	
	def search
		if params[:name]
			@volumes ||= ComicVineVolume.search(params[:name])
			render :json => @volumes if params[:output]=='json'
		end
	end
end