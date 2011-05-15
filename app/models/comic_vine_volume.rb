require 'ostruct'

class ComicVineVolume < OpenStruct
	undef id
	
	def self.find(id)
		response = ComicVine.get('volume', id)
		object = self.new(response)
		object.issues = object.issues.map{|i| ComicVineIssue.new(i) }
		object
	end
	
	def self.search(name)
		response = ComicVine.search(['volume'], name)
		collection = []
		response.each do |object|
			collection << self.new(object)
		end
		collection
	end
	
end