// Namespace our app
var app = app || {}

app.singleComic = Backbone.Model.extend({
    defaults: {
        idComic: 0,
        idGenre: 0,
        name: "",
        number: 0,
        cover: "",
        link: "",
        description: ""
    }
});