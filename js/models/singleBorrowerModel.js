// Namespace our app
var app = app || {}

app.Borrower = Backbone.Model.extend({
    defaults: {
        idBorrower: 0,
        name: "borrower0",
        address: "address0",
        phone: 1123581321
    }
});