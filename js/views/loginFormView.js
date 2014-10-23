// Namespace our app
var app = app || {}

// The view for the login form
app.loginFormView = Backbone.View.extend({

    el: '#content',

    template: $('#loginFormTemplate').html(),

    events: {
        'click #btn_generic_login'      : 'login',
        'keyup #user_pass'              : 'enter',
        'click #btn_generic_register'   : 'register'
    },

    render: function () {
        this.$el.html( this.template );
    },

    login: function () {
        var user = {
            username : $('#user_name').val(),
            password : $('#user_pass').val()
        };

        if (this.validate(user)) {
            var login = app.sessions_collection.login(user);
            if(typeof login == "string") {
                this.loginError(login);
            } else {
                // do login
                window.location.replace('#home');
            }            
        }
    },

    validate: function (data) {
        if((data.username).length == 0 && (data.password).length == 0){
            alert('Please, fill in all the fields');
            return false;
        };
        return true;
    },

    loginError: function (msg) {
        switch(msg){
            case "mismatch":
                alert("There's a mismatch between the username and the password provided.\nPlease, try again");
                break;
            case "user404":
                alert("We couldn't find a user in our system that matches that username.\nPlease, try again");
                break;
            default:
                alert("Woops! " + msg);
                break;
        }
        $('#user_name').val("");
        $('#user_pass').val("");
    },

    logout: function() {
        app.sessions_collection.logout();
    },

    register: function () {
        window.location.replace('#register');
    },

    enter: function (e) {
        if (e.keyCode == 13) {
            this.login();
        }
    }

});

app.loginform = new app.loginFormView();