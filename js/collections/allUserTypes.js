// Namespace our app
var app = app || {}

app.UserTypesCollection = Backbone.Collection.extend({
    model: app.singleUserType,
    //localStorage: new Backbone.LocalStorage('user_types_store'),
    url: 'json/userTypes.json'
});

app.user_types_collection = new app.UserTypesCollection();