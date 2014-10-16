// Namespace our app
var app = app || {}

app.singleComic = Backbone.Model.extend({
    defaults: {
    	idComic: 0,
    	idGenre: 0,
    	name: "comic0",
    	number: 0,
    	cover: "images/placeholder.jpg"
    },

    initialize: function() {
        console.log("A comic instance named " + this.get("name") + " has been created ");
    }
});