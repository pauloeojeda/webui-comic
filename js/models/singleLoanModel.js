// Namespace our app
var app = app || {}

app.Loan = Backbone.Model.extend({
    defaults: {
    	idLoan: 0,
    	idBorrower: 0,
    	idSpecimen: 0,
    	date: "October 14, 2014",
    	obs: "observation0"
    }
});