// Namespace our app
var app = app || {}

app.UsersCollection = Backbone.Collection.extend({
    model: app.singleUser,
    localStorage: new Backbone.LocalStorage('users_store')
});

app.users_collection = new app.UsersCollection();