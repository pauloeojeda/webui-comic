// Namespace our app
var app = app || {}

app.singleCharacter = Backbone.Model.extend({
    defaults: {
        idCharacter: 0,
        name: "",
        link: "",
        featured: false,
        description: ""
    }
});