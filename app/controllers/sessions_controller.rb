class SessionsController < ApplicationController
  def create
    username, password = params[:user].values
    if User.authenticate_with_credentials(username, password)
      @user = User.find_by_username(username)
      login(user)
  end

  def destroy
    logout
  end

end
