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
    }
});