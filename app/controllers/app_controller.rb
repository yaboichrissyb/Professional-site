require 'pony'
require 'sinatra'
require 'dotenv'
Dotenv.load
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
    options = {
      :to => ENV["EMAIL_ADDRESS"],
      :from => params[:email],
      :subject => "Message from: #{params[:name]}",
      :body => params[:message],
      :via => :smtp,
      :via_options => {
        :address => 'smtp.sendgrid.net',
        :port => '587',
        :domain => 'heroku.com',
        :user_name => ENV["SENDGRID_USERNAME"],
        :password => ENV["SENDGRID_PASSWORD"],
        :authentication => :plain,
        :enable_starttls_auto => true
      }
    }
    Pony.mail(options)
    redirect '/'
  end
end
