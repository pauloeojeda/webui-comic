// Namespace our app
var app = app || {}

app.UsersCollection = Backbone.Collection.extend({
    model: app.singleUser,
    localStorage: new Backbone.LocalStorage('users_store'),
    url: 'json/users.json',

    register: function ( data ) {
        // let's search if the user already is registered
        var user = app.users_collection.findWhere({ username: data.username });
        // check if the user already exists
        if (app.util.isEmpty(user)) {
            app.users_collection.fetch();

            var newUser = new app.singleUser({username: data.username, password: data.password});
            app.users_collection.add(newUser);
            newUser.save();
            app.users_collection.fetch();
            return true;
        } else {
            // user already exists
            return false;
        }
    }
});

app.users_collection = new app.UsersCollection();