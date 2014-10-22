// Namespace our app
var app = app || {}

app.GenresCollection = Backbone.Collection.extend({
    model: app.singleGenre,
    localStorage: new Backbone.LocalStorage('genres_store')
});

app.genres_collection = new app.GenresCollection();