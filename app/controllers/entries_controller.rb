class EntriesController < ApplicationController
  before_filter :authorize

  def index
    feed = Feed.find(params[:feed_id])
    render :json => feed.entries
  end
end
