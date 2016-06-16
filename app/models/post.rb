class Post < ActiveRecord::Base
  has_many :taggings
  has_many :tags, through: :taggings

  validates :title, :body, { presence: true }

  def self.most_recent
    Post.order(created_at: :desc).limit(5)
  end
end