// Namespace our app
var app = app || {}

// The view for the login form
app.registerFormView = Backbone.View.extend({

    el: '#content',

    errorEl: '#errorRegister',

    template: $('#registerFormTemplate').html(),

    events: {
        'click #btn_generic_login_2'      : 'login',
        'keyup #user_pass_r2'             : 'enter',
        'click #btn_generic_register_2'   : 'register'
    },

    render: function () {
        this.$el.html( this.template );
    },

    login: function () {
        app.router.navigate('', {trigger: true});
    },

    register: function () {
        app.users_collection.fetch();
        var user = {
            username : $('#user_name_r').val(),
            password : $('#user_pass_r').val(),
            passconf : $('#user_pass_r2').val()
        };

        if(this.validate(user)) {
            var register = app.users_collection.register(user);

            if(register)
            {
                app.router.navigate('', {trigger: true});
                app.util.displayError(this.errorEl, "Registered successfully!\nPlease log in below");
            } else {
                this.registerError();
            }
        }
    },

    validate: function (user) {
        if((user.username).length == 0 || (user.password).length == 0){
            app.util.displayError(this.errorEl, "Please, fill in all the fields");
            return false;
        };
        if ((user.password).length < 7) {
            app.util.displayError(this.errorEl, "Your password must have at least 7 characters. Please choose a longer one");
            this.clearPasswordsFields();
            return false;
        };
        if(! (/^([a-zA-Z0-9]{1,})$/.test(user.username))) {
            app.util.displayError(this.errorEl, "Neither your username, nor your password, can contain special characters.\nPlease choose another one");
            this.clearUsernameField();
            return false;
        };
        if(! (/^([a-zA-Z0-9]{7,})$/.test(user.password))) {
            app.util.displayError(this.errorEl, "Neither your username, nor your password, can contain special characters.\nPlease choose another one");
            this.clearPasswordsFields();
            return false;
        };
        if (user.password != user.passconf) {
            app.util.displayError(this.errorEl, "Passwords mismatch! Try Again");
            this.clearPasswordsFields();
            return false;
        }
        return true;
    },

    clearUsernameField: function () {
        $('#user_name_r').val('');
        $('#user_name_r').focus();
    },

    clearPasswordsFields: function () {
        $('#user_pass_r').val('');
        $('#user_pass_r2').val('');
        $('#user_pass_r').focus();
    },

    registerError: function () {
        app.util.displayError(this.errorEl, "There's already an user with that username.\nPlease choose another one");
        this.clearUsernameField();
    },

    enter: function (e) {
        if (e.keyCode == 13) {
            this.register();
        }
    }

});

app.registerform = new app.registerFormView();