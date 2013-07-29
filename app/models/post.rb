class Post < ActiveRecord::Base
  attr_accessible :body, :title

  validates :title, length: {minimum: 2}
end
