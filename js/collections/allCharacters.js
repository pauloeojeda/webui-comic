// Namespace our app
var app = app || {}

app.CharactersCollection = Backbone.Collection.extend({
    model: app.singleCharacter,
    url: 'json/characters.json'
});

app.characters_collection = new app.CharactersCollection();
// app.characters_collection.fetch();
// should not fetch right after because it causes duplication later on
// should not fetch right after because it causes duplication later on
// should not fetch right after because it causes duplication later on
// should not fetch right after because it causes duplication later on
// should not fetch right after because it causes duplication later on
// should not fetch right after because it causes duplication later on
// should not fetch right after because it causes duplication later on
// should not fetch right after because it causes duplication later on
// should not fetch right after because it causes duplication later on
// should not fetch right after because it causes duplication later on