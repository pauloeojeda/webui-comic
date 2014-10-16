// Namespace our app
var app = app || {}

app.Specimen = Backbone.Model.extend({
    defaults: {
    	idSpecimen: 0,
    	idComic: 0,
    	obs: "observation0"
    }
});