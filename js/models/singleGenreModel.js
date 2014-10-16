// Namespace our app
var app = app || {}

app.Genre = Backbone.Model.extend({
    defaults: {
    	idGenre: 0,
    	name: "genre0",
    	description: "description0"
    }
});