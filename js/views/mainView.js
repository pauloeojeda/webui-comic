// Namespace our app
var app = app || {}

// The view for the login form
app.mainView = Backbone.View.extend({

    el: '#content',

    template: $('#mainTemplate').html(),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html( this.template );
    }
});