app.Router = Backbone.Router.extend({
    routes:{
        ''                  : 'login',
        'user:logout'       : 'logout',
        'register'          : 'register',
        'api'               : 'api',
        'resetApiKey'       : 'resetApiKey',
        'home'              : 'home',
        'admin:dashboard'   : 'dashboard',
        'genre:name'        : 'genre',
        'character:name'    : 'character'
    },

    login : function() {
        if (this.savedSession()) {
            app.router.navigate('api', {trigger: true});
        } else {
            app.loginform.render();
        }
    },

    logout: function() {
        app.sessions_collection.clearSession();
        app.router.navigate('', {trigger: true});
    },

    register: function() {
        app.sessions_collection.clearSession();
        app.registerform.render();
    },

    api: function() {
        if (this.loggedIn()) {
            if (!this.savedApiKey()) {
                app.marvel_api_form.render();
            } else {
                app.router.navigate('home', {trigger: true});
            }
        } else {
            app.router.navigate('', {trigger: true});
        }
    },

    resetApiKey: function () {
        app.marvel_api_keys_collection.clearMarvelKey();
        app.router.navigate('api', {trigger: true});
    },

    loggedIn: function() {
        return app.sessions_collection.isSessionActive();
    },

    savedSession: function () {
        return (this.loggedIn() && app.sessions_collection.at(0).get('remember'));
    },

    activeApiKeys: function() {
        app.marvel_api_keys_collection.fetch();
        return !app.marvel_api_keys_collection.isEmpty();
    },

    savedApiKey: function() {
        return (this.activeApiKeys() && app.marvel_api_keys_collection.at(0).get('remember'));
    },

    authenticated: function() {
        return (this.loggedIn() && this.activeApiKeys());
    },

    mainView: function (collection, custom) {
        app.main_view.render();
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
        if (this.authenticated()) {
            this.mainView(app.comics_collection, false);
        } else {
            app.router.navigate('', {trigger: true});
        }
    },

    dashboard: function () {
        if (this.authenticated()) {
            app.admindashboard.render();
        } else {
            app.router.navigate('', {trigger: true});
        }
    },

    genre: function (genreName) {
        if (this.authenticated()) {
            var genre = app.genres_collection.findWhere({link: genreName.substring(1)});
            if (! app.util.isEmpty(genre)) {
                var comics = app.comics_collection.where({idGenre: genre.get("idGenre")});
                var comicsCollection = new app.ComicsCollection(comics);
                this.mainView(comicsCollection, true);
            }
        } else {
            app.router.navigate('', {trigger: true});
        }
    },

    character: function (characterName) {
        if (this.authenticated()) {
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
        } else {
            app.router.navigate('', {trigger: true});
        }
    }
});

app.router = new app.Router();
Backbone.history.start();