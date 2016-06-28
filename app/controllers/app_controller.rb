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

get '/blog' do
  erb :'blog/index'
end

get '/resume' do
  erb :'resume'
end
get '/blog/:title' do
  erb :"blog/#{params[:title]}"
end

get '/projects/:title' do
  erb :"projects/#{params[:title]}/index"
end

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
