// Namespace our app
var app = app || {}

app.VideosCollection = Backbone.Collection.extend({
    model: app.singleVideo,
    localStorage: new Backbone.LocalStorage('videos_store')
});

app.videos_collection = new app.VideosCollection();