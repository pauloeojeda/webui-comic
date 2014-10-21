// Namespace our app
var app = app || {}

// The view for the login form
app.loginFormView = Backbone.View.extend({

    el: '#content',

    template: $('#loginFormTemplate').html(),

    events: {
        'click #btn_generic_login'      : 'login',
        'click #btn_generic_register'   : 'register'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html( this.template );
    },

    login: function () {
        var user = {
            username : $('#user_name').val(),
            password : $('#user_pass').val()
        };

        var login = app.sessions_collection.login(user);

        if(login)
        {
            // DO LOGIN
            //$('#login_error').html();
            window.location.replace('#home');
        }
        else
        {
            // RETURN ERROR
            this.loginError();
        }
    },

    loginError: function () {
        // login error message
        //$('#login_error').html('Your username or password are incorrect.');
        alert('login error!')
    },

    logout: function() {
        app.sessions_collection.logout();
    },

    register: function () {
        window.location.replace('#register');
    }

});

app.loginform = new app.loginFormView();