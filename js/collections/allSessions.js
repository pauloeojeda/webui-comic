// Namespace our app
var app = app || {}

app.SessionsCollection = Backbone.Collection.extend({
    model: app.singleSession,
    localStorage: new Backbone.LocalStorage('sessions_store'),

    login: function ( data ) {
        // get the user's data
        var user = app.users_collection.where({ username: data.username, password: data.password });

        // check if the user exists
        if (!app.generic_collection.isEmpty(user[0])) {
            user = user[0];

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
            // login failed
            return false;
        }
    },

    check_login: function () {
        // get the user's data
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
        // get the user's data
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

        window.location.href = '';
    }
});

app.sessions_collection = new app.SessionsCollection();