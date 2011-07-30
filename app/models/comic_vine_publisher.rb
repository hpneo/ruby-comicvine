require 'ostruct'

class ComicVinePublisher < OpenStruct
	undef id
	
	def self.all
		response = ComicVine.all('publisher')
		collection = []
		response.each do |object|
			collection << self.new(object)
		end
		collection
	end
	
	def self.find(id)
		response = ComicVine.get('publisher', id)
		self.new(response)
	end
	
	def fetch
		ComicVinePublisher.find(id)
	end
	
end
