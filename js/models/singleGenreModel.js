// Namespace our app
var app = app || {}

app.singleGenre = Backbone.Model.extend({
    defaults: {
    	idGenre: 0,
    	name: "",
    	description: ""
    }
});