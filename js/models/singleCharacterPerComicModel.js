// Namespace our app
var app = app || {}

app.singleCharacterPerComic = Backbone.Model.extend({
    defaults: {
        idCharacter: 0,
        idComic: 0
    }
});