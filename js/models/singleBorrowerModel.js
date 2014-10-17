// Namespace our app
var app = app || {}

app.Borrower = Backbone.Model.extend({
    defaults: {
        idBorrower: 0,
        name: "",
        address: "",
        phone: 0
    }
});