require 'ostruct'

class ComicVineVolume < OpenStruct
	undef id
	
	def self.find(id)
		response = ComicVine.get('volume', id)
		object = self.new(response)
		object.issues = object.issues.map{|i| ComicVineIssue.new(i) }
		object
	end
	
end