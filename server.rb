require 'sinatra'

set :public_folder, proc { File.join("./view") }
