app.Router = Backbone.Router.extend({
    routes:{
        ''          : 'login',
        'logout'    : 'logout',
        'home'      : 'home'
    },

    login : function () {
        app.loginform.render();
    },

    logout: function () {
        app.loginFormView.logout()
    },

    home : function () {
        var login = app.sessions_collection.check_login();
        if (!app.generic_collection.isEmpty(login)) {
            /* app.allcomics.render();*/
            $("#content").html(new app.allComicsView({ collection: comicGroup}).render().el);
        }
    }
    
});

app.router = new app.Router();
Backbone.history.start();