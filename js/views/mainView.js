// Namespace our app
var app = app || {}

// The view for the login form
app.mainView = Backbone.View.extend({

    el: '#content',
    template: $('#mainTemplate').html(),

    initialize: function () {
        this.render();
    },

    events: {
        'keyup #quickSearch'    : 'enter'
    },

    render: function () {
        this.$el.html( this.template );
        this.renderUsername();
        this.hideAdminOptionsIfUser();
        this.renderCharactersDropdown();
    },

    renderUsername: function () {
        var username = this.getCurrentUsername();
        if (username) {
            $('#usernameNavbar')[0].childNodes[0].nodeValue = username + " ";
        }
    },

    renderCharactersDropdown: function () {
        var charactersDropdownView = new app.allCharactersDropdownView({collection: app.characters_collection});
        charactersDropdownView.load();
    },

    hideAdminOptionsIfUser: function () {
        var usertype = this.getUser(this.getSession().get("idUser")).get("idUserType");
        if(usertype != 1){
            $(".adminOption").hide();
        }
    },

    getCurrentUsername: function () {
        var idUser = this.getSession().get("idUser");
        var username = this.getUser(idUser).get('fullname');
        return username;
    },

    getSession: function () {
        app.sessions_collection.fetch();
        return app.sessions_collection.at(0);
    },

    getUser: function (idUser) {
        app.users_collection.fetch();
        return app.users_collection.findWhere({id: idUser});
    },

    enter: function (e) {
        if (e.keyCode == 13) {
            this.filter($("#quickSearch").val());
        }
    },

    filter: function (text) {
    }
});