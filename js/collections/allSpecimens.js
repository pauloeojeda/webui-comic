// Namespace our app
var app = app || {}

app.SpecimensCollection = Backbone.Collection.extend({
    model: app.singleSpecimen,
    localStorage: new Backbone.LocalStorage('specimens_store'),
    url: 'json/specimens.json'
});

app.specimens_collection = new app.SpecimensCollection();