// Namespace our app
var app = app || {}

app.ComicsCollection = Backbone.Collection.extend({
    model: app.singleComic,
    localStorage: new Backbone.LocalStorage('comics_store'),
    url: 'json/comics.json'
});

app.comics_collection = new app.ComicsCollection();