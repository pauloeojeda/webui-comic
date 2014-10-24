// Namespace our app
var app = app || {}

app.BorrowersCollection = Backbone.Collection.extend({
    model: app.singleBorrower,
    localStorage: new Backbone.LocalStorage('borrowers_store'),
    url: 'json/borrowers.json'
});

app.borrowers_collection = new app.BorrowersCollection();