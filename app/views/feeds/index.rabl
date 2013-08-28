collection @feeds
attributes :title, :url, :id

child(:entries) do
  attributes :id, :title, :feed_id, :link, :json
end
