// Namespace our app
var app = app || {}

app.CharactersPerComicCollection = Backbone.Collection.extend({
    model: app.singleCharacterPerComic,
    url: 'json/charactersPerComic.json'
});

app.characters_per_comic_collection = new app.CharactersPerComicCollection();