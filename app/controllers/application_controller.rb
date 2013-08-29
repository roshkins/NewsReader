class ApplicationController < ActionController::Base
  protect_from_forgery

  def login(user)
    session[:token] = user.set_token!
  end

  def current_user
    !session[:token].blank? &&
    (@current_user ||= User.find_by_token(session[:token]))
  end

  def logout
    current_user.set_token!
    session[:token] = ""
  end

  def logged_in?
    !!current_user
  end

  def authorize
    unless logged_in?
      render json: "Login failed.", :status => :unauthorized
    end
  end
end
