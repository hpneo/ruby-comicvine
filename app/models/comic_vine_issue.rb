require 'ostruct'

class ComicVineIssue < OpenStruct
	undef id
	
	def self.find(id)
		response = ComicVine.get('issue', id)
		self.new(response)
	end
	
	def fetch
		ComicVineIssue.find(id)
	end
	
end