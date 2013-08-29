class UsersController < ApplicationController
  def create
    user = User.new(params[:user])
    if user.save
      login(user)
      render :json => user
    else
      respond_to do |format|
        format.json {render text: "User creation failed.", :status => :unauthorized}
      end
    end
  end

end
