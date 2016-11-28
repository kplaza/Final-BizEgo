require 'sinatra'
require 'net/http'
require 'json'

get '/home' do 
	

	erb :home
end

post '/info' do 
	erb :info
end
