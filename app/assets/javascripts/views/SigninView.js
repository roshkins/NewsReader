NewsReader.Views.SigninView = Backbone.View.extend ({
	template: JST['user/signin'],
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	events: {
		"button#signin click": "signin"
	},

	signin: function (event) {
		var formData = $(event.currentTarget).parents("#user_form").serializeJSON();
		$.ajax({
			url: "/session/new",
			type: "POST",
			data: formData,
			success: function () {
				Backbone.history.navigate("");
			},
			error: function () {
				alert("Login failed.");
				Backbone.history.navigate("signin");
			}
		});

	}


});