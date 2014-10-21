// Namespace our app
var app = app || {}

app.AllUsers = Backbone.Collection.extend({
    model: app.singleUser,
    localStorage: new Backbone.LocalStorage('users_store')
});

app.users_collection = new app.AllUsers();