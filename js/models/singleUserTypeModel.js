// Namespace our app
var app = app || {}

app.singleUserType = Backbone.Model.extend({
    defaults: {
        idUserType: 0,
        name: "",
        description: ""
    }
});