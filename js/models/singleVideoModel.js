// Namespace our app
var app = app || {}

app.singleVideo = Backbone.Model.extend({
    defaults: {
        idVideo: 0,
        idGenre: 0,
        name: "",
        number: 0,
        link: "",
        url:"",
        description: ""
    },

    initialize: function() {
        console.log("A video instance named " + this.get("name") + " has been created ");
    }
});