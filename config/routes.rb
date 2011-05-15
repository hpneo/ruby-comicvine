Comicvine::Application.routes.draw do
	root :to => 'home#index'
	match 'volumes/:volume' => 'volume#show'
	match 'volumes/:volume/:issue' => 'volume#show_issue'
	match 'search' => 'volume#search'
end
