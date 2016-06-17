require 'pony'

get '/' do
  erb :'index'
end

get '/projects' do
  erb :'projects/index'
end

get '/projects/:title' do
  erb :'projects/show'
end

get '/blog' do
  erb :'blog/index'
end

# get '/blog/:title' do
#   @post = Post.find_by(title: params[:title])
#   erb :"blog/#{title}"
# end

# get '/contact' do
#   erb :'contact'
# end
post '/email' do
  if(params['email'] == params['email2'])&&(params['email'].include?("@"))
    Pony.mail :to => 'app52272931@heroku.com',
            :from => params[:email],
            :body => params[:message]
  end
  redirect '/'
end
