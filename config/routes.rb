Comicvine::Application.routes.draw do
	root :to => 'home#index'
	match 'volumes/search' => 'volume#search'
	match 'volumes/:volume' => 'volume#show'
	match 'volumes/:volume/:issue' => 'volume#show_issue'
	match 'story_arcs/:story_arc' => 'story_arc#show'
	match 'publishers' => 'publisher#index'
	match 'publishers/:publisher' => 'publisher#show'
end
