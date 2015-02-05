// Namespace our app
var app = app || {}

app.MarvelApiKeysCollection = Backbone.Collection.extend({

    model: app.singleMarvelApiKey,

    localStorage: new Backbone.LocalStorage('marvel_api_keys_store'),

    addMarvelKey: function (data) {
        this.clearMarvelKey();
        var apiKey = new app.singleMarvelApiKey({publicKey: data});
        var result = {exitCode: 0};
        apiKey.on("invalid", function(model, error) {
            result = {exitCode: 1, message: error};
        });
        app.marvel_api_keys_collection.add(apiKey);
        apiKey.save();
        app.marvel_api_keys_collection.fetch();
        return result;
        
    },

    clearMarvelKey: function () {
        app.marvel_api_keys_collection.fetch();
        var length = app.marvel_api_keys_collection.length;
        for (var i = length - 1; i >= 0; i--) {
            app.marvel_api_keys_collection.at(i).destroy();
        }
    }
});

app.marvel_api_keys_collection = new app.MarvelApiKeysCollection();