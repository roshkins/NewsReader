NewsReader.Models.Feed = Backbone.Model.extend({
	 // rootUrl:"feeds",

	parse: function(data) {
		data.entries = new NewsReader.Collections.Entries(data.entries);
		return data;
	},

	toJSON: function() {
		var json = this.prototype.toJSON();
		json.entries = this.entries.toJSON();
		return json;
	}

})