Comicvine::Application.routes.draw do
	root :to => 'home#index'
	match ':volume' => 'volume#show'
	match ':volume/:issue' => 'volume#show_issue'
end
