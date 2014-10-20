// Namespace our app
var app = app || {}

app.AllUsers = Backbone.Collection.extend({
    model: app.singleUser,
    localStorage: new Backbone.LocalStorage('users_store'),

    isEmpty: function ( val ) {
        if(val == 0 || val == false || val == '' || val == {} || val == [] || val == null || val == undefined)
        {
            return true;
        }
        
        return false;
    }
});

app.users_collection = new app.AllUsers();