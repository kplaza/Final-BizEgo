require 'sinatra'
require 'net/http'
require 'json'

get '/' do 
erb :home
end

get '/info' do 
erb :info
end
