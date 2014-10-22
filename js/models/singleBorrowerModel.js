// Namespace our app
var app = app || {}

app.singleBorrower = Backbone.Model.extend({
    defaults: {
        idBorrower: 0,
        name: "",
        address: "",
        phone: 0
    }
});