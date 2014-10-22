// Namespace our app
var app = app || {}

app.singleSpecimen = Backbone.Model.extend({
    defaults: {
    	idSpecimen: 0,
    	idComic: 0,
    	obs: ""
    }
});