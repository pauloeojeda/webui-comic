// Namespace our app
var app = app || {}

app.SpecimensCollection = Backbone.Collection.extend({
    model: app.singleSpecimen,
    localStorage: new Backbone.LocalStorage('specimens_store')
});

app.specimens_collection = new app.SpecimensCollection();