// Namespace our app
var app = app || {}

// The view for the login form
app.adminDashboardView = Backbone.View.extend({

    el: 'body',

    template: $('#adminDashboard').html(),

    render: function () {
        this.$el.html( this.template );
    }
});

app.admindashboard = new app.adminDashboardView();