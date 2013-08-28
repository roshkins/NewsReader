NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"feeds/:id/entries": "show",
		"feeds/:feed_id/entries/:id": "entry_show"
	},

	_loadContent: function (callbackWithFeeds) {
		var feeds = new NewsReader.Collections.Feeds();
		feeds.fetch({success: callbackWithFeeds.bind(null, feeds)});
	},

	index: function () {
		this._loadContent(
			 function(feeds){
				var feedsIndexView = new NewsReader.Views.FeedsIndexView({
					collection: feeds
				});
				$("#content").html(feedsIndexView.render().$el.html());
			}
		);
	},

	show: function (id) {
		this._loadContent(function(feeds) {
			var feed = feeds.get(id);
			var feedView = new NewsReader.Views.FeedView({
				model: feed
			});
			$("#content").html(feedView.render().$el.html());
		});
	},

	entry_show: function (feed_id, id) {
		this._loadContent(function (feeds) {
			var feed = feeds.get(feed_id);
			debugger
			var entry = feed.get("entries").get(id);
			var entryShowView = new NewsReader.Views.EntryView({
				model: entry
			});
			$("#content").html(entryShowView.render().$el.html());
		})
	}
});