class ComicVine
	
	@@api_key = "42f916cdc6ab0316b376f4a46731bcabf7463fb9"
	
	def self.api_url
		"http://api.comicvine.com/"
	end
	
	def self.api_key=(key)
		@@api_key = key
	end
	
	def self.get(resource, id)
		url = ComicVine.api_url+"/#{resource}/#{id}/?api_key=#{@@api_key}&format=json"
		data = ActiveSupport::JSON.decode(Net::HTTP.get_response(URI.parse(url)).body)['results']
	end
	
end