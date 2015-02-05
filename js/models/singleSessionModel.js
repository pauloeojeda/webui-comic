// Namespace our app
var app = app || {}

app.singleSession = Backbone.Model.extend({
    defaults: {
        idUser: "",
        remember: false
    },
});