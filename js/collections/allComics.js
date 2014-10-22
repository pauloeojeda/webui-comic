// Namespace our app
var app = app || {}

app.ComicsCollection = Backbone.Collection.extend({
    model: app.singleComic,
    localStorage: new Backbone.LocalStorage('comics_store')
});

app.comics_collection = new app.ComicsCollection();