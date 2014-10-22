// Namespace our app
var app = app || {}

app.singleGame = Backbone.Model.extend({
    defaults: {
        idGame: 0,
        idGenre: 0,
        name: "",
        number: 0,
        link: "",
        description: ""
    },

    initialize: function() {
        console.log("A game instance named " + this.get("name") + " has been created ");
    }
});