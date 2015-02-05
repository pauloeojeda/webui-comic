app.Router = Backbone.Router.extend({
    routes:{
        ''                  : 'login',
        'user:logout'       : 'logout',
        'register'          : 'register',
        'api'               : 'api',
        'home'              : 'home',
        'admin:dashboard'   : 'dashboard',
        'genre:name'        : 'genre',
        'character:name'    : 'character'
    },

    login : function() {
        app.sessions_collection.clearSession();
        app.loginform.render();
    },

    logout: function() {
        app.loginform.logout();
    },

    register: function() {
        app.sessions_collection.clearSession();
        app.registerform.render();
    },

    api: function() {
        if (this.loggedIn()) {
            app.marvel_api_form.render();
        } else {
            app.router.navigate('', {trigger: true});
        }        
    },

    loggedIn: function() {
        var login = app.sessions_collection.check_login();
        return !app.util.isEmpty(login);
    },

    activeApiKeys: function() {
        var keys = app.sessions_collection.check_apis();
        return !app.util.isEmpty(keys);
    },

    authenticated: function() {
        return (this.loggedIn() && this.activeApiKeys());
    },

    mainView: function (collection, custom) {
        new app.mainView();
        if (collection) {
            var comicsView = new app.allComicsView({collection: collection});
            if (custom) {
                comicsView.loadCustomView();
            } else {
                comicsView.load();
            }
        }
    },

    home: function () {
        if (this.loggedIn()) {
            this.mainView(app.comics_collection, false);
        }
    },

    dashboard: function () {
        app.admindashboard.render();
    },

    genre: function (genreName) {
        if (this.loggedIn()) {
            var genre = app.genres_collection.findWhere({link: genreName.substring(1)});
            if (! app.util.isEmpty(genre)) {
                var comics = app.comics_collection.where({idGenre: genre.get("idGenre")});
                var comicsCollection = new app.ComicsCollection(comics);
                this.mainView(comicsCollection, true);
            }
        }
    },

    character: function (characterName) {
        if (this.loggedIn()) {
            var character = app.characters_collection.findWhere({link: characterName.substring(1)});
            var self = this;
            if (! app.util.isEmpty(character)) {
                app.characters_per_comic_collection.fetch({success: (function (){
                    var comicsPerCharacter = app.characters_per_comic_collection.where({idCharacter: character.get("idCharacter")});
                    if(! app.util.isEmpty(comicsPerCharacter)){
                        var comicsCollection = [];
                        comicsPerCharacter.forEach(function(element, index){
                            var comic = app.comics_collection.findWhere({idComic: element.get("idComic")});
                            comicsCollection.push(comic);
                        });
                        var collection = new app.ComicsCollection(comicsCollection);
                        self.mainView(collection, true);
                    } else {
                        alert("no comics for that character where found");
                        self.navigate("home", {trigger: true});
                    }
                })});
            } else {
                throw "character not found";
            }
        }
    }
});

app.router = new app.Router();
Backbone.history.start();