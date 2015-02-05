// Namespace our app
var app = app || {}

app.Utils = Backbone.Collection.extend({

    model: new Backbone.Model({}),

    errorDisplayDuration: 3000,

    errorFadeDuration: 1500,

    isEmpty: function ( val ) {
        if(val == 0 || val == false || val == '' || val == {} || val == [] || val == null || val == undefined)
        {
            return true;
        }
        return false;
    },

    displayError: function (el, msg) {
        $(el).html(msg).stop();
        $(el).removeClass('in').removeAttr('style');
        if (!this.isEmpty(this.errorId)) {
            window.clearTimeout(this.errorId);
        }
        this.errorId = window.setTimeout(function () {
            $(el).addClass('in').fadeOut(this.errorFadeDuration);
        }, this.errorDisplayDuration);
    }
});

app.util = new app.Utils();