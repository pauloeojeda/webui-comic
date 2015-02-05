// Namespace our app
var app = app || {}

// The view for the login form
app.loginFormView = Backbone.View.extend({

    el: '#content',

    errorEl: '#errorLogin',

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
            var result = app.sessions_collection.login(user);
            if(typeof result == "string") {
                this.loginError(result);
            } else {
                // do login
                app.router.navigate('#api', {trigger: true});
            }            
        }
    },

    validate: function (data) {
        if((data.username).length == 0 && (data.password).length == 0){
            app.util.displayError(this.errorEl, "Please, fill in all the fields");
            return false;
        };
        return true;
    },

    loginError: function (msg) {
        switch(msg){
            case "mismatch":
                app.util.displayError(this.errorEl, "There's a mismatch between the username and the password provided.\nPlease, try again");
                break;
            case "user404":
                app.util.displayError(this.errorEl, "We couldn't find a user in our system that matches that username.\nPlease, try again");
                break;
            default:
                app.util.displayError(this.errorEl, "Woops! " + msg);
                break;
        }
        $('#user_name').val("");
        $('#user_pass').val("");
        $('#user_name').focus();
    },

    logout: function() {
        app.sessions_collection.logout();
    },

    register: function () {
        app.router.navigate('#register', {trigger: true});
    },

    enter: function (e) {
        if (e.keyCode == 13) {
            this.login();
        }
    },

});

app.loginform = new app.loginFormView();