Comicvine::Application.routes.draw do
	root :to => 'home#index'
	match 'volumes/:volume' => 'volume#show'
	match 'story_arcs/:story_arc' => 'story_arc#show'
	match 'volumes/:volume/:issue' => 'volume#show_issue'
	match 'search' => 'volume#search'
end
