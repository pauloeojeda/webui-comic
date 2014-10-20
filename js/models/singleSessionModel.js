// Namespace our app
var app = app || {}

app.singleSession = Backbone.Model.extend({
    defaults: {
        idSession: 0,
        session: ""
    },
});