// Namespace our app
var app = app || {}

app.SessionsCollection = Backbone.Collection.extend({
    model: app.singleSession,
    localStorage: new Backbone.LocalStorage('sessions_store'),

    login: function ( data, rememberSession ) {
        this.clearSession();

        // try to find a registered user whose username matches
        var user = app.users_collection.findWhere({ username: data.username });
        if (!app.util.isEmpty(user)) {
            // now let's try to find the exact match
            var user = app.users_collection.findWhere({ username: data.username, password: data.password });

            // did we find it?
            if (!app.util.isEmpty(user)) {
                // we sure did
                var session = new app.singleSession({
                    idUser: user.id,
                    remember: rememberSession
                });

                app.sessions_collection.add(session);
                session.save();
                app.sessions_collection.fetch();

                return true;
            } else {
                // no we haven't. there's a mismatch in the user-pass pair
                return 'mismatch';
            }
        } else {
            // there was not such a user with that username
            return 'user404';
        }
    },

    isSessionActive: function () {
        // get the users' data
        app.sessions_collection.fetch();
        return (!app.sessions_collection.isEmpty());
    },

    logout: function () {
        this.clearSession();
        app.router.navigate('', {trigger: true});
    },

    clearSession: function () {
        app.util.clearCollection(app.sessions_collection);
    }
});

app.sessions_collection = new app.SessionsCollection();