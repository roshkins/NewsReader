NewsReader.Views.EntryView = Backbone.View.extend({
	template: JST["entries/show"],
	render: function(){
		var content = this.template({
			entry: this.model
		});
		this.$el.html(content);
		return this;
	}
});