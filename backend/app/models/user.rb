class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable, :recoverable, :validatable, :jwt_authenticatable, jwt_revocation_strategy: self
  validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: "Invalid email format" }
  validates :password, presence: true, length: { minimum: 6 }, confirmation: true
  has_and_belongs_to_many :reports
end