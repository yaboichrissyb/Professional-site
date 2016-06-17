# Require config/environment.rb
require ::File.expand_path('../config/environment',  __FILE__)
require './env' if File.exists?('env.rb')

set :app_file, __FILE__

run Sinatra::Application

Pony.options = {
      :via => :smtp,
      :via_options => {
        :address => 'smtp.sendgrid.net',
        :port => '587',
        :domain => 'gmail.com',
        :user_name => ENV['SENDGRID_USERNAME'],
        :password => ENV['SENDGRID_PASSWORD'],
        :authentication => :plain,
        :enable_starttls_auto => true
      }
    }