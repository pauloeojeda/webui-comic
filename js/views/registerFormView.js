// Namespace our app
var app = app || {}

// The view for the login form
app.registerFormView = Backbone.View.extend({

    el: '#content',

    template: $('#registerFormTemplate').html(),

    events: {
        'click #btn_generic_login_2'      : 'login',
        'click #btn_generic_register_2'   : 'register'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html( this.template );
    },

    login: function () {
        window.location.replace('');
    },

    register: function () {
        // TO DO
        window.location.replace('#home');
    }

});

app.registerform = new app.registerFormView();