// Namespace our app
var app = app || {}

app.singleMarvelApiKey = Backbone.Model.extend({
    defaults: {
        publicKey: ""
    },

    validate: function(attrs, options) {
        var valid = (/^([a-zA-Z0-9]{1,})$/.test(attrs.publicKey));
        if(!valid){
            return "Invalid characters found in the provided key";
        }
    }
});