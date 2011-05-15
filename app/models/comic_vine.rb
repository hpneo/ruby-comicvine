class ComicVine
	
	@@api_key = "42f916cdc6ab0316b376f4a46731bcabf7463fb9"
	
	def self.api_url
		"http://api.comicvine.com/"
	end
	
	def self.api_key=(key)
		@@api_key = key
	end
	
	def self.get(resource, id)
		url = ComicVine.api_url+"#{resource}/#{id}/?api_key=#{@@api_key}&format=json"
		data = ActiveSupport::JSON.decode(Net::HTTP.get_response(URI.parse(url)).body)['results']
	end
	
	def self.search(resources, query)
		url = ComicVine.api_url+"search/?api_key=#{@@api_key}&query=#{CGI.escape(query)}&resources=#{resources.join(',')}&format=json"
		response = ActiveSupport::JSON.decode(Net::HTTP.get_response(URI.parse(url)).body)
		number_of_total_results = response['number_of_total_results']
		pages = (number_of_total_results/20).to_i
		data = []
		pages.times.each do |page|
			url = ComicVine.api_url+"search/?api_key=#{@@api_key}&query=#{CGI.escape(query)}&resources=#{resources.join(',')}&offset=#{page*20}&format=json"
			response = ActiveSupport::JSON.decode(Net::HTTP.get_response(URI.parse(url)).body)
			data.concat(response['results']) if response
		end
		data.sort_by{|obj| obj['name'] }
	end
	
end