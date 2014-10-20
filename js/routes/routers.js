app.Router = Backbone.Router.extend({
    routes:{
        ''          : 'login',
        'logout'    : 'logout',
        'home'      : 'home'
    },

    login : function () {
        app.loginFormView().render();
    },

    logout: function () {
        app.loginFormView.logout()
    },

    home : function () {
        var login = app.sessions_collection.check_login();
        if (!app.users_collection.isEmpty(login)) {
            app.allComicsView.render();
        }
    }
    
});

app.router = new app.Router();
Backbone.history.start();