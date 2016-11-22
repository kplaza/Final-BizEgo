require 'sinatra'

get '/home' do 
	erb :home
end

get '/info' do 
	erb :info
end
