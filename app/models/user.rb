require 'bcrypt'
class User < ActiveRecord::Base
  attr_accessible :password, :token, :username

  def password=(plain_text)
    self.password_digest = BCrypt::Password.create(plain_text)
  end

  def set_token!
    token = SecureRandom::urlsafe_base64(16)
    self.token = token
    self.save!
    self.token
  end

  def self.authenticate_with_credentials(username, password)
    user = User.find_by_username(username)
    BCrypt::Password.new(self.password_digest) == password
  end

end
