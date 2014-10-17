// Namespace our app
var app = app || {}

// The view for the login form
app.loginFormView = Backbone.View.extend({

    el: '#loginForm',

    template: $('#loginFormTemplate').html(),

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html( this.template );
    }

});

// Used to render at the beginning of index loading
app.loginform = new app.loginFormView();