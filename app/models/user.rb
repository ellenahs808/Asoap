# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    # AASPIRE
    validates :email, :password_digest, :first_name, :last_name, presence: true
    validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    after_initialize :ensure_session_token



    has_many :carts,
        class_name: :Cart,
        foreign_key: :user_id



    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
          user
        else
          nil
        end
    end


    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end


    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end


    def reset_session_token! 
      self.session_token = SecureRandom.urlsafe_base64
      self.save!
      return self.session_token
    end


    def ensure_session_token 
      self.session_token ||= SecureRandom.urlsafe_base64
    end

end
