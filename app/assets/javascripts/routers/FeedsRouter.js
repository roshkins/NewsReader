NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
	routes: {
		"": "index",
		"feeds/:id/entries": "show",
		"feeds/:feed_id/entries/:id": "entry_show",
		"signin": "signin",
		"signup": "signup",
		"signout": "signout"
	},


	_loadContent: function (callbackWithFeeds) {
		var feeds = new NewsReader.Collections.Feeds();
		feeds.fetch({success: callbackWithFeeds.bind(null, feeds)});
	},

	signin: function () {
		var signinView = new NewsReader.Views.SigninView();
		$("#content").html(signinView.render().$el.html());
		$("#sidebar").addClass("hidden");
	},

	index: function () {
		this._loadContent(
			 function(feeds){
				var feedsIndexView = new NewsReader.Views.FeedsIndexView({
					collection: feeds
				});
				$("#sidebar").html(feedsIndexView.render().$el.html());
			}
		);
	},

	show: function (id) {
		this.index();
		this._loadContent(function(feeds) {
			var feed = feeds.get(id);
			var feedView = new NewsReader.Views.FeedView({
				model: feed
			});
			$("#content").html(feedView.render().$el.html());
		});
	},

	entry_show: function (feed_id, id) {
		this.index();
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