// Namespace our app
var app = app || {}

app.SessionsCollection = Backbone.Collection.extend({
    model: app.singleSession,
    localStorage: new Backbone.LocalStorage('sessions_store'),

    login: function ( data ) {
        // try to find a registered user whose username matches
        var user = app.users_collection.findWhere({ username: data.username });
        if (!app.generic_collection.isEmpty(user)) {
            // now let's try to find the exact match
            var user = app.users_collection.findWhere({ username: data.username, password: data.password });

            // did we find it?
            if (!app.generic_collection.isEmpty(user)) {
                // we sure did
                app.sessions_collection.fetch();

                // originally get(0)
                var session = app.sessions_collection.at(0);

                if (app.generic_collection.isEmpty(session)) {
                    session = new app.singleSession({ session: true });

                    app.sessions_collection.add(session);
                    session.save();
                    app.sessions_collection.fetch();
                } else {
                    session.set({
                        session: true
                    });
                    session.save();
                    app.sessions_collection.fetch();
                }
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

    check_login: function () {
        // get the users' data
        app.sessions_collection.fetch();
        // originally get(0)
        var session = app.sessions_collection.at(0);

        // check if it exists
        if (session.toJSON().session == true) {
            // still logged in
            return true;
        } else {
            // not logged in
            window.location.href = '';
        }
    },

    logout: function () {
        this.clearSession();

        window.location.href = '';
    },

    clearSession: function () {
        // get the users' data
        app.sessions_collection.fetch();

        //originally get(0)
        var session = app.sessions_collection.at(0);

        if(!app.generic_collection.isEmpty(session)){
            // change the status to false
            session.set({
                session: false
            });
            session.save();
            app.sessions_collection.fetch();
        }
    }
});

app.sessions_collection = new app.SessionsCollection();