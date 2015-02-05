// Namespace our app
var app = app || {}

app.util = {

    errorDisplayDuration: 3000,

    errorFadeDuration: 1500,

    isEmpty: function ( val ) {
        return (val == 0 ||
            val == false ||
            val == '' ||
            val == {} ||
            val == [] ||
            val == null ||
            val == undefined);
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
};