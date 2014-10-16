// Namespace our app
var app = app || {}

app.singleUser = Backbone.Model.extend({
    defaults: {
    	idUser: 0,
        username: "sheldon",
        password: "bazinga",
    	fullname: "Sheldon Cooper",
    },

    initialize: function() {
        console.log("A user named " + this.name + " has been created");
    }
});