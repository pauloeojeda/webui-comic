// Namespace our app
var app = app || {}

app.singleUserType = Backbone.Model.extend({
    defaults: {
        idUserType: 0,
        name: "",
        description: ""
    },

    initialize: function() {
        console.log("A user type named " + this.get("name") + " has been created");
    }
});