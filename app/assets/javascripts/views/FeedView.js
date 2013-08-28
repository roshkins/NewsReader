NewsReader.Views.FeedView = Backbone.View.extend({
	template: JST["feeds/show"],
	render: function () {
		var content = this.template({
			feed: this.model
		});
		this.$el.html(content);
		return this;
	}
});