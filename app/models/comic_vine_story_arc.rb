require 'ostruct'

class ComicVineStoryArc < OpenStruct
	undef id
	
	def self.find(id)
		response = ComicVine.get('story_arc', id)
		object = self.new(response)
		object.issues = object.issues.map{|i| ComicVineIssue.new(i) }
		object
	end
	
	def self.search(name)
		response = ComicVine.search(['story_arc'], name)
		collection = []
		response.each do |object|
			collection << self.new(object)
		end
		collection
	end
end