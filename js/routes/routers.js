app.Router = Backbone.Router.extend({
    routes:{
        ''                  : 'login',
        'user:logout'       : 'logout',
        'register'          : 'register',
        'home'              : 'home',
        'admin:dashboard'   : 'dashboard'
    },

    login : function () {
        app.sessions_collection.clearSession();
        app.loginform.render();
    },

    logout: function () {
        app.loginform.logout();
    },

    register: function () {
        app.sessions_collection.clearSession();
        app.registerform.render();
    },

    home: function () {
        var login = app.sessions_collection.check_login();
        if (!app.generic_collection.isEmpty(login)) {
            new app.mainView();
            $("#contentArea").html(new app.allComicsView({ collection: comicGroup}).render().el);
        }
    },

    dashboard: function () {
        app.admindashboard.render();
    }
    
});

app.router = new app.Router();
Backbone.history.start();