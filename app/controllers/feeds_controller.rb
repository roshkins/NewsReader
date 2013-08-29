class FeedsController < ApplicationController
  before_filter :authorize, :except => [:index]

  def index
    if logged_in?
      @feeds = Feed.all
      @feeds.map! do |feed|
        if feed.two_min_old?
          feed.reload
          feed.updated_at = Time.now
          feed.save!
        end
        feed
      end
    else
      @feeds = []
    end
    respond_to do |format|
      format.html { render :index }
      format.json { render "index.rabl" }
    end


  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
end
