class VolumeController < ApplicationController
	def show
		@volume = ComicVineVolume.find(params[:volume])
	end
	
	def show_issue
		@volume ||= ComicVineVolume.find(params[:volume])
		@issue = @volume.issues.select{|issue| issue.issue_number.to_i==params[:issue].to_i }.first
		@issue = ComicVineIssue.find(@issue.id)
	end
	
	def search
		if params[:name]
			@volumes ||= ComicVineVolume.search(params[:name])
		end
	end
end