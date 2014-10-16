// Namespace our app
var app = app || {}

app.ComicsCollection = Backbone.Collection.extend({
    model: app.singleComic
})