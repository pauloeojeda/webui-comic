// Namespace our app
var app = app || {}

// The view for the login form
app.marvelApiFormView = Backbone.View.extend({

    el: '#content',

    template: $('#marvelApiTemplate').html(),

    events: {
        'click #btn_generic_api_key_continue'   : 'submitKey',
        'keyup #marvel_public_key'              : 'enter'
    },

    submitKey: function () {
        var public_key = $('#marvel_public_key').val();

        if (this.validate(public_key)) {
            var result = app.marvel_api_keys_collection.addMarvelKey(public_key, $('#rememberKey').is(':checked'));
            if(result.exitCode == 0) {
                app.router.navigate('#home', {trigger: true});
            } else {
                $('#marvel_public_key').val("");
                $('#marvel_public_key').focus();
            }            
        }
    },

    validate: function (data) {
        return data.length != 0;
    },

    render: function () {
        this.$el.html( this.template );
    },

    enter: function (e) {
        if (e.keyCode == 13) {
            this.submitKey();
        }
    }

});

app.marvel_api_form = new app.marvelApiFormView();