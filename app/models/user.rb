class User < ApplicationRecord
  has_many :UserIdeas
  has_many :songs, through: :UserIdeas
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
