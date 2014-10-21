// Namespace our app
var app = app || {}

app.singleUser = Backbone.Model.extend({
    defaults: {
    	idUser: 0,
        idUserType: 0,
        username: "",
        password: "",
        fullname: ""
    },

    initialize: function() {
        console.log("A user named " + this.get("fullname") + " has been created");
    },

    validate: function(attrs) {
        if(! /^([a-zA-Z0-9]{1,})$/.test(attrs.username)){
            return "error";
        }
        if(! /^([a-zA-Z0-9]{7,})$/.test(attrs.password)){
            return "error";
        }
    }
});