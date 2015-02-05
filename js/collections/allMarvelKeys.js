// Namespace our app
var app = app || {}

app.MarvelApiKeysCollection = Backbone.Collection.extend({

    model: app.singleMarvelApiKey,

    localStorage: new Backbone.LocalStorage('marvel_api_keys_store'),

    addMarvelKey: function (data, rememberKey) {
        this.clearMarvelKey();
        var apiKey = new app.singleMarvelApiKey({publicKey: data, remember: rememberKey});
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
        app.util.clearCollection(app.marvel_api_keys_collection);
    }
});

app.marvel_api_keys_collection = new app.MarvelApiKeysCollection();