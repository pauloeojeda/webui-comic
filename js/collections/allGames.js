// Namespace our app
var app = app || {}

app.GamesCollection = Backbone.Collection.extend({
    model: app.singleGame,
    localStorage: new Backbone.LocalStorage('games_store'),
    url: 'json/games.json'
});

app.games_collection = new app.GamesCollection();