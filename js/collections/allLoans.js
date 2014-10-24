// Namespace our app
var app = app || {}

app.LoansCollection = Backbone.Collection.extend({
    model: app.singleLoan,
    localStorage: new Backbone.LocalStorage('loans_store'),
    url: 'json/loans.json'
});

app.loans_collection = new app.LoansCollection();